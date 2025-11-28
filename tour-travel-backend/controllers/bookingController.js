import Booking from "../models/Booking.js";

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("tour");

    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
