// backend/routes/tourRoutes.js
import express from "express";
import {
  createTour,
  getAllTours,
  getTourById,
  updateTour,
  deleteTour,
} from "../controllers/tourController.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

// PUBLIC: list tours for users
router.get("/", getAllTours);

// ADMIN: list all tours (same data, but behind auth)
router.get("/all", adminAuth, getAllTours);

// PUBLIC: single tour by id
router.get("/:id", getTourById);

// ADMIN: create tour
router.post("/add", adminAuth, createTour);

// ADMIN: update tour
router.put("/:id", adminAuth, updateTour);

// ADMIN: delete tour
router.delete("/:id", adminAuth, deleteTour);

export default router;
