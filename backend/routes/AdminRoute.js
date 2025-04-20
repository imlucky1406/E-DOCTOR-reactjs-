import express from "express";
import { addDoctor, allDoctor, loginAdmin } from '../controllers/AdminController.js'
import upload from "../middlewares/Multer.js";
import authAdmin from "../middlewares/AuthAdmin.js";
import { changeAvailablity } from "../controllers/DoctorController.js";

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', loginAdmin);
adminRouter.post('/all-doctors',authAdmin,allDoctor);
adminRouter.post('/change-availablity',authAdmin,changeAvailablity);


// adminRouter.post('/add-doctor', addDoctor);

export default adminRouter  