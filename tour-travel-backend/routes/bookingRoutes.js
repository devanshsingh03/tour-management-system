import express from "express";
import auth, { isAdmin } from "../middleware/auth.js";
import {
  createBooking,
  getMyBookings,
  getAllBookings,
  updateBookingStatus,
} from "../controllers/bookingController.js";

const router = express.Router();

// CREATE BOOKING
router.post("/create", auth, createBooking);

// USER BOOKINGS
router.get("/my-bookings", auth, getMyBookings);

// ADMIN BOOKINGS
router.get("/all", auth, isAdmin, getAllBookings);

// ADMIN UPDATE STATUS
router.put("/:id/status", auth, isAdmin, updateBookingStatus);

export default router;
