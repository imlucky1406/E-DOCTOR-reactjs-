import express from 'express'

import { bookAppointment, cancelAppointment, getProfile, listAppointment, loginUser, paymentRazorpay, registerUser, updateProfile, verifyRazorpay } from '../controllers/UserController.js'
import authUser from '../middlewares/AuthUser.js'
import upload from '../middlewares/Multer.js'

const userRouter = express. Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)


userRouter.get('/get-profile',authUser, getProfile)
userRouter.post('/book-appointment',authUser, bookAppointment)
userRouter.post('/update-profile',upload.single('image'),authUser , updateProfile)
userRouter.get('/appointments',authUser, listAppointment)
userRouter.post('/cancle-appointment',authUser, cancelAppointment)
userRouter.post('/payment-razorpay',authUser, paymentRazorpay)
userRouter.post('/verifyRazorpay',authUser, verifyRazorpay)




export default userRouter