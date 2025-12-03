// controllers/bookingController.js
import Booking from "../models/Booking.js";
import Tour from "../models/Tour.js";

export const createBooking = async (req, res) => {
  try {
    const { tourId, tourName, image, date, travelers, price } = req.body;

    if (!tourName || !date || !travelers || !price) {
      return res.status(400).json({ message: "Missing booking fields" });
    }

    const booking = await Booking.create({
      user: req.user.id,
      tour: tourId || null,
      tourName,
      image,
      date,
      travelers,
      price
    });

    return res.status(201).json(booking);
  } catch (error) {
    console.error("Create booking error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).sort({
      createdAt: -1
    });

    // Format response EXACTLY as frontend expects
    const formatted = bookings.map((b) => ({
      image: b.image,
      tourName: b.tourName,
      date: b.date.toISOString().slice(0, 10), // Format: YYYY-MM-DD
      travelers: b.travelers,
      price: b.price,
      status: b.status
    }));

    res.json(formatted);
  } catch (error) {
    console.error("Get my bookings error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("tour", "title location")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    console.error("Get all bookings error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.json(booking);
  } catch (error) {
    console.error("Update booking status error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
