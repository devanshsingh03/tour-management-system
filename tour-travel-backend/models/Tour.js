import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [String], default: [] },
    highlights: { type: [String], default: [] },
    itinerary: [
      {
        day: String,
        detail: String,
      },
    ],
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
