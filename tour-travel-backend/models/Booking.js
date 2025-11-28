import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour",
    required: true
  },
  travelers: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: "Pending"   // Pending / Confirmed
  }
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
