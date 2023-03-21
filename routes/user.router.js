const express = require("express");
const { register, login, getProfile, editProfile } = require("../controller/user");
const { authenticate } = require("../middlewares/authenticate");

const UserRouter = express.Router();


UserRouter.post("/register",register );

UserRouter.post("/login",login);

UserRouter.get("/getProfile",authenticate,getProfile)

UserRouter.post("/editProfile",authenticate,editProfile)

module.exports = { UserRouter };