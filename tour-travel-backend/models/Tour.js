// backend/models/Tour.js
import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema(
  {
    day: { type: String, required: false },
    detail: { type: String, required: false },
  },
  { _id: false }
);

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },

    images: {
      type: [String],
      default: [],
    },

    highlights: {
      type: [String],
      default: [],
    },

    itinerary: {
      type: [itinerarySchema],
      default: [],
    },
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
