import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/AdminRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middleware
app.use(express.json())
app.use(cors())

    // const userRoutes = require('../backend/routes/UserRoute.js')
    // import userRoutes from '../backend/routes/UserRoute.js'
    // app.use(userRoutes)

//api endpoints
app.use('/api/admin',adminRouter)

    app.post('/test', (req, res) => {
        console.log('Test hit', req.body);
        res.send('Test OK');
      });

app.get('/',(req,res)=> {
    res.send('WORKIN ON PORT 4000')
})




app.listen(port, ()=> console.log("server strated", port))