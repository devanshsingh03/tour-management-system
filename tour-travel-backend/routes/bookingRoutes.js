import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getMyBookings } from "../controllers/bookingController.js";

const router = express.Router();

// Get bookings of logged-in user
router.get("/my-bookings", protect, getMyBookings);

export default router;
