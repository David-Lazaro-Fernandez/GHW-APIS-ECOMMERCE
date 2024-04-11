import express, { Express, Request, Response } from "express";
import pool from './db/dbInitiator'
import routes from './routes';

const app: Express = express()
const PORT = 8000

app.use(express.json())
app.use('/', routes)

app.listen(PORT, () => {
  pool.query('SELECT 1+1 AS solution').then(() => {
    console.log('Connected to database')
  }).catch((err) => {
    console.log('Failed to connect to database with the following error: ', err)
  })
})