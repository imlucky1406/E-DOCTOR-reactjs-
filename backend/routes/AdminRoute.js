import express from "express";
import { addDoctor, loginAdmin } from '../controllers/AdminController.js'
import upload from "../middlewares/Multer.js";
import authAdmin from "../middlewares/AuthAdmin.js";

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', loginAdmin);

// adminRouter.post('/add-doctor', addDoctor);

export default adminRouter  