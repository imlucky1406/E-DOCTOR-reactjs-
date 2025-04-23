import express from "express";
import { addDoctor, adminDashboard, allDoctor, appointmentCancel, appointmentsAdmin, loginAdmin } from '../controllers/AdminController.js'
import upload from "../middlewares/Multer.js";
import authAdmin from "../middlewares/AuthAdmin.js";
import { changeAvailablity } from "../controllers/DoctorController.js";

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', loginAdmin);
adminRouter.post('/all-doctors',authAdmin,allDoctor);
adminRouter.post('/change-availablity',authAdmin,changeAvailablity);
adminRouter.get('/appointments',authAdmin,appointmentsAdmin);
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel);
adminRouter.get('/dashboard',authAdmin,adminDashboard);


// adminRouter.post('/add-doctor', addDoctor);

export default adminRouter  