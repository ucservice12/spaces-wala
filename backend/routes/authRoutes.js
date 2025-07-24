import express from "express";
import { protectWithUser } from "../middleware/protectWithUser.js";
import { isauthrize, logout } from "../controllers/userController.js";
import { login, sendOtp } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/send-otp", sendOtp);
router.post("/login", login);
router.get("/isauthrize", protectWithUser, isauthrize); // for see user authrize or not
router.get("/logout", logout)

export default router;
