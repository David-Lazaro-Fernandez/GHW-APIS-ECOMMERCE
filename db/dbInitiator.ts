import mysql from 'mysql2/promise'
import dbConfig from './db'

const pool = mysql.createPool(dbConfig)

export default pool