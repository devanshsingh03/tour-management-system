import Tour from "../models/Tour.js";

export const addTour = async (req, res) => {
  try {
    const {
      title,
      location,
      duration,
      price,
      description,
      images,
      highlights,
      itinerary
    } = req.body;

    const tour = new Tour({
      title,
      location,
      duration,
      price,
      description,
      images,
      highlights,
      itinerary,
    });

    await tour.save();

    res.status(201).json({
      message: "Tour added successfully!",
      tour,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error while adding tour" });
  }
};
