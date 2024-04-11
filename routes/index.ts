import {Router, Request, Response} from 'express'
import userRoutes from './userRoutes'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send({ 'message': 'Hello World!' })
})

router.use('/users', userRoutes)
  
export default router