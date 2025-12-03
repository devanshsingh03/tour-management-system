// routes/bookingRoutes.js
import express from "express";
import auth from "../middleware/authMiddleware.js"; // make sure this path+name matches your project
import Booking from "../models/Booking.js";

const router = express.Router();

/**
 * POST /api/bookings/create
 * Create a new booking for the logged-in user
 */
router.post("/create", auth, async (req, res) => {
  try {
    const { tourId, travelers = 1, amount } = req.body;

    if (!tourId) {
      return res.status(400).json({ message: "tourId is required" });
    }

    const booking = await Booking.create({
      user: req.user.id,     // if your field is userId, change to userId
      tour: tourId,          // if your field is tourId, change to tourId
      travelers,
      amount: amount || 0,
      status: "Pending",
    });

    return res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (err) {
    console.error("Create booking error:", err);
    return res
      .status(500)
      .json({ message: "Failed to create booking", error: err.message });
  }
});

/**
 * GET /api/bookings/my-bookings
 * Get all bookings for the logged-in user
 */
router.get("/my-bookings", auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }) // or userId: req.user.id
      .populate("tour", "title price location") // adjust field names according to your Tour model
      .sort({ createdAt: -1 });

    return res.json({ bookings });
  } catch (err) {
    console.error("Get my bookings error:", err);
    return res
      .status(500)
      .json({ message: "Failed to fetch bookings", error: err.message });
  }
});

export default router;
