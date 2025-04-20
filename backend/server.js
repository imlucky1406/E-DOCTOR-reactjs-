import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/AdminRoute.js'
import doctorRouter from './routes/DctorRoute.js';
import userRouter from './routes/UserRoute.js';

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middleware
app.use(express.json())
app.use(cors())


//api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)



app.get('/',(req,res)=> {
    res.send('WORKIN ON PORT 4000')
})




app.listen(port, ()=> console.log("server strated", port))