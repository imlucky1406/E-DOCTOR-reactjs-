import express from 'express'

import { getProfile, loginUser, registerUser } from '../controllers/UserController.js'
import authUser from '../middlewares/AuthUser.js'

const userRouter = express. Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)


userRouter.get('/get-profile',authUser, getProfile)




export default userRouter