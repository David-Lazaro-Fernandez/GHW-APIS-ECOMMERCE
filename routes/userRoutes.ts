import {Router} from 'express'
import UserController from '../controllers/user-controller'
const router = Router()

router.get('/', UserController.readUsers)
router.post('/', UserController.createUser)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

export default router