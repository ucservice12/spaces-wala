// routes/shareRoutes.js
import express from "express";
import { shareContent } from "../controllers/shareControllers.js";

const router = express.Router();

router.get("/:id", shareContent)

export default router;
