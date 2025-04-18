// const userModel = require("../models/UserModel")

// const addUser = async(req,res)=>{
//     const savedUser = await userModel.create(req.body)

//     res.json({
//         message:"user added..",
//         data:savedUser
//     })
// }

// const getUser = async(req,res)=>{
//     const user = await userModel.find()

//     res.json({
//         message:"User Fetched...",
//         data:user
//     })
// }

// const deleteUser = async(req,res)=>{
//     const deletedUSer = await userModel.findByIdAndDelete(req.params.id)

//     res.json({
//         message:"User Deleted Successfully.....",
//         data:deletedUSer
//     })
// }

// const getUserById= async(req,res)=>{
//     const foundUser = await userModel.findById(req.params.id)

//     res.json({
//         message:"User Fetched Successfully.....",
//         data:foundUser
//     })
// }

// module.exports = {
//     addUser,getUser,deleteUser,getUserById

// }

// const userModel = require("../models/UserModel");
import userModel from "../models/UserModel.js";
// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt"

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const foundUserFromEmail = await userModel.findOne({ email: email }).populate('roleId');
  console.log(foundUserFromEmail);
  
  if (foundUserFromEmail != null) {
    
    const isMatch = bcrypt.compareSync(password, foundUserFromEmail.password);
    
    if (isMatch == true) {
      res.status(200).json({
        message: "login success",
        data: foundUserFromEmail,
      });
    } else {
      res.status(404).json({
        message: "invalid cred..",
      });
    }
  } else {
    res.status(404).json({
      message: "Email not found..",
    });
  }
};

const signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashedPassword;
    const createdUser = await userModel.create(req.body);
    res.status(201).json({
      message: "user created..",
      data: createdUser,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "error",
      data: err,
    });
  }
};

const addUser = async (req, res) => {
  
  const savedUser = await userModel.create(req.body);
  res.json({
    message: "User Saved Successfully",
    data: savedUser,
  });
};
const getAllUsers = async (req, res) => {
  const users = await userModel.find().populate("roleId");
  res.json({
    message: "User fetched successfully..",
    data: users,
  });
};

const getUserById = async (req, res) => {
  const foundUser = await userModel.findById(req.params.id);
  res.json({
    message: "user fetched successfully..",
    data: foundUser,
  });
};

const deleteUserById = async (req, res) => {
  const deletedUser = await userModel.findByIdAndDelete(req.params.id);
  res.json({
    message: "user deleted Successfully..",
    data: deletedUser,
  });
};

export {
  addUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  signup,
  loginUser,
};