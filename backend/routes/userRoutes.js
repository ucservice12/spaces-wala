import express from "express";
import { getUser } from "../controllers/userController.js";
import { protect } from "../middleware/protect.js"
const router = express.Router();


router.get("/getuser", protect, getUser); // for find user by id

export default router;
