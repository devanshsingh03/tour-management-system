import express from "express";
import { addTour } from "../controllers/tourController.js";

const router = express.Router();

router.post("/add", addTour);

export default router;
