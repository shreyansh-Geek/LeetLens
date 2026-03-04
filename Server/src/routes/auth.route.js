import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.js";
import express from "express";

const authRouter = express.Router();

/* POST  /api/auth/register */
authRouter.post("/register", registerUser);

/* POST  /api/auth/login */
authRouter.post("/login", loginUser);

/* POST  /api/auth/logout */
authRouter.post("/logout", logoutUser);

export default authRouter 