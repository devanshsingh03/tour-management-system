// backend/controllers/tourController.js
import Tour from "../models/Tour.js";


// POST /api/tours/add
// (admin only - route uses adminAuth)

export const createTour = async (req, res) => {
  try {
    const {
      title,
      location,
      duration,
      price,
      description,
      images,
      highlights,
      itinerary,
    } = req.body;

    if (!title || !location || !duration || !price || !description) {
      return res
        .status(400)
        .json({ message: "Title, location, duration, price, description required" });
    }

    const tour = await Tour.create({
      title,
      location,
      duration: Number(duration),
      price: Number(price),
      description,
      images: Array.isArray(images) ? images.filter(Boolean) : [],
      highlights: Array.isArray(highlights) ? highlights.filter(Boolean) : [],
      itinerary: Array.isArray(itinerary)
        ? itinerary.filter((d) => d && (d.day || d.detail))
        : [],
    });

    return res.status(201).json({ message: "Tour created", tour });
  } catch (err) {
    console.error("Create tour error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET /api/tours/all  (admin list)
// GET /api/tours       (public list)

export const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find().sort({ createdAt: -1 });
    return res.json(tours);
  } catch (err) {
    console.error("Get all tours error:", err);
    return res.status(500).json({ message: "Failed to fetch tours" });
  }
};

// GET /api/tours/:id

export const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: "Tour not found" });
    }
    return res.json(tour);
  } catch (err) {
    console.error("Get tour by id error:", err);
    return res.status(500).json({ message: "Failed to fetch tour" });
  }
};


// PUT /api/tours/:id  (admin)

export const updateTour = async (req, res) => {
  try {
    const {
      title,
      location,
      duration,
      price,
      description,
      images,
      highlights,
      itinerary,
    } = req.body;

    const tour = await Tour.findByIdAndUpdate(
      req.params.id,
      {
        title,
        location,
        duration: duration !== undefined ? Number(duration) : undefined,
        price: price !== undefined ? Number(price) : undefined,
        description,
        images: Array.isArray(images) ? images.filter(Boolean) : undefined,
        highlights: Array.isArray(highlights) ? highlights.filter(Boolean) : undefined,
        itinerary: Array.isArray(itinerary)
          ? itinerary.filter((d) => d && (d.day || d.detail))
          : undefined,
      },
      { new: true, runValidators: true }
    );

    if (!tour) {
      return res.status(404).json({ message: "Tour not found" });
    }

    return res.json({ message: "Tour updated", tour });
  } catch (err) {
    console.error("Update tour error:", err);
    return res.status(500).json({ message: "Failed to update tour" });
  }
};


// DELETE /api/tours/:id (admin)

export const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: "Tour not found" });
    }
    return res.json({ message: "Tour deleted" });
  } catch (err) {
    console.error("Delete tour error:", err);
    return res.status(500).json({ message: "Failed to delete tour" });
  }
};
