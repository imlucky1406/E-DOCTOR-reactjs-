// const routes =  require("express").Router()
// import routes from ("express");
import express from "express";
const routes = express.Router();

// const userController= require("../controllers/UserController")
import{
    addUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    signup,
    loginUser,
  } from "../controllers/UserController.js"

// routes.get("/user",userController.getUser)
// routes.post("/user",userController.addUser)
// routes.delete("/user/:id",userController.deleteUser)
// routes.get("/user/:id",userController.getUserById)


// routes.post("/user",signup)
routes.get("/user", getAllUsers)
routes.post("/user",addUser)
routes.get("/user/:id", getUserById)
routes.delete("/user/:id",deleteUserById)
routes.post("/user/login",loginUser)


// module.exports = routes
export default routes