import Booking from "../models/Booking.js";
import Tour from "../models/Tour.js";

/**
 * CREATE BOOKING
 * POST /api/bookings/create
 */
export const createBooking = async (req, res) => {
  try {
    const { tourId, travelers = 1, dateOfTravel } = req.body;

    const userId = req.user.id; // ✅ FIX

    if (!tourId || !dateOfTravel) {
      return res.status(400).json({ message: "Missing booking fields" });
    }

    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(404).json({ message: "Tour not found" });
    }

    const amount = tour.price * travelers;

    const booking = await Booking.create({
      user: userId,
      tour: tourId,
      travelers,
      dateOfTravel,
      amount,
      status: "pending", // ✅ FIX
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Create booking error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


/**
 * USER BOOKINGS
 * GET /api/bookings/my-bookings
 */
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }) 
      .populate("tour", "title images location price")
      .sort({ createdAt: -1 });

    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


/**
 * ADMIN: GET ALL BOOKINGS
 */
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("tour", "title location")
      .sort({ createdAt: -1 });

    res.json({ bookings });
  } catch (error) {
    console.error("Get all bookings error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * ADMIN: UPDATE STATUS
 
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json(booking);
  } catch (error) {
    console.error("Update booking status error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
*/
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["pending", "confirmed", "cancelled"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
      .populate("user", "name email")
      .populate("tour", "title location");

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({
      message: "Booking status updated",
      booking,
    });
  } catch (error) {
    console.error("Update booking status error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
