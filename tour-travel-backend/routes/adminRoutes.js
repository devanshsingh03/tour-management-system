// // // backend/routes/adminRoutes.js
// // import express from "express";
// // import bcrypt from "bcryptjs";
// // import jwt from "jsonwebtoken";

// // import Admin from "../models/Admin.js";
// // import User from "../models/User.js";
// // import Tour from "../models/Tour.js";
// // import Booking from "../models/Booking.js";
// // import adminAuth from "../middleware/adminAuth.js";

// // const router = express.Router();

// // // =======================
// // // POST /api/admin/signup
// // // =======================
// // router.post("/signup", async (req, res) => {
// //   try {
// //     const { name, email, password, confirmPassword, secretKey } = req.body;

// //     if (!name || !email || !password || !confirmPassword || !secretKey) {
// //       return res.status(400).json({ message: "All fields are required" });
// //     }

// //     if (password !== confirmPassword) {
// //       return res.status(400).json({ message: "Passwords do not match" });
// //     }

// //     // Optional: protect admin creation with env secret
// //     if (
// //       process.env.ADMIN_SECRET_KEY &&
// //       secretKey !== process.env.ADMIN_SECRET_KEY
// //     ) {
// //       return res.status(400).json({ message: "Invalid secret admin key" });
// //     }

// //     const existing = await Admin.findOne({ email });
// //     if (existing) {
// //       return res.status(400).json({ message: "Admin already exists" });
// //     }

// //     const hashed = await bcrypt.hash(password, 10);

// //     const admin = await Admin.create({
// //       name,
// //       email,
// //       password: hashed,
// //     });

// //     return res.status(201).json({
// //       message: "Admin created successfully",
// //       adminId: admin._id,
// //     });
// //   } catch (err) {
// //     console.error("Admin signup error:", err);
// //     return res.status(500).json({ message: "Server error" });
// //   }
// // });

// // // =======================
// // // POST /api/admin/login
// // // =======================
// // router.post("/login", async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     if (!email || !password) {
// //       return res
// //         .status(400)
// //         .json({ message: "Please provide email and password" });
// //     }

// //     const admin = await Admin.findOne({ email });
// //     if (!admin) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     const isMatch = await bcrypt.compare(password, admin.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     const token = jwt.sign(
// //       { id: admin._id, role: "admin" },
// //       process.env.JWT_SECRET,
// //       { expiresIn: "7d" }
// //     );

// //     return res.json({
// //       message: "Admin login successful",
// //       token,
// //       role: "admin",
// //     });
// //   } catch (err) {
// //     console.error("Admin login error:", err);
// //     return res.status(500).json({ message: "Server error" });
// //   }
// // });

// // // =======================
// // // GET /api/admin/stats
// // // =======================
// // router.get("/stats", adminAuth, async (req, res) => {
// //   try {
// //     const tours = await Tour.countDocuments();
// //     const users = await User.countDocuments();
// //     const bookings = await Booking.countDocuments();

// //     // Sum revenue from "amount" field (will be 0 if no bookings)
// //     const agg = await Booking.aggregate([
// //       { $group: { _id: null, total: { $sum: "$amount" } } },
// //     ]);
// //     const revenue = agg.length ? agg[0].total : 0;

// //     return res.json({ tours, users, bookings, revenue });
// //   } catch (err) {
// //     console.error("Admin stats error:", err);
// //     return res.status(500).json({ message: "Failed to load stats" });
// //   }
// // });

// // // ==============================
// // // GET /api/admin/recent-bookings
// // // ==============================
// // router.get("/recent-bookings", adminAuth, async (req, res) => {
// //   try {
// //     const recent = await Booking.find()
// //       .populate("user", "name email") // make sure Booking has field "user"
// //       .populate("tour", "title location") // and field "tour"
// //       .sort({ createdAt: -1 })
// //       .limit(5);

// //     return res.json({ bookings: recent });
// //   } catch (err) {
// //     console.error("Admin recent bookings error:", err);
// //     return res.status(500).json({ message: "Failed to load recent bookings" });
// //   }
// // });

// // export default router;


import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import adminAuth from "../middleware/adminAuth.js";
import Booking from "../models/Booking.js";
import Tour from "../models/Tour.js";
import User from "../models/User.js";

const router = express.Router();

// /* ============================
//       ADMIN SIGNUP
// =============================== */
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, secretKey } = req.body;

    if (secretKey !== process.env.ADMIN_SECRET_KEY) {
      return res.status(400).json({ message: "Invalid Secret Key" });
    }

    const exists = await Admin.findOne({ email });
    if (exists) return res.status(400).json({ message: "Admin already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: hashed,
    });

    res.json({ message: "Admin created successfully", admin });
  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

// /* ============================
  //    ADMIN LOGIN
//=============================== */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Admin not found" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Admin login successful",
      token,
      role: "admin",
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

// /* ============================
//       ADMIN STATS
// =============================== */
// router.get("/stats", adminAuth, async (req, res) => {
//   try {
//     const tours = await Tour.countDocuments();
//     const users = await User.countDocuments();
//     const bookings = await Booking.countDocuments();

//     const revenueData = await Booking.find();
//     const revenue = revenueData.reduce((sum, b) => sum + b.amount, 0);

//     res.json({ tours, users, bookings, revenue });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to load stats" });
//   }
// });

// /* ============================
//     RECENT BOOKINGS
// =============================== */
// router.get("/recent-bookings", adminAuth, async (req, res) => {
//   try {
//     const recent = await Booking.find()
//       .sort({ createdAt: -1 })
//       .limit(5)
//       .populate("userId", "name")
//       .populate("tourId", "title");

//     res.json({ bookings: recent });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to load recent bookings" });
//   }
// });

// export default router;


// import express from "express";
// import adminAuth from "../middleware/adminAuth.js";
// import Booking from "../models/Booking.js";
// import Tour from "../models/Tour.js";
// import User from "../models/User.js";

// const router = express.Router();

// GET admin stats
router.get("/stats", adminAuth, async (req, res) => {
  try {
    const tours = await Tour.countDocuments();
    const users = await User.countDocuments();
    const bookings = await Booking.countDocuments();

    const allBookings = await Booking.find();
    const revenue = allBookings.reduce((sum, b) => sum + (b.amount || 0), 0);

    res.json({ tours, users, bookings, revenue });
  } catch (err) {
    console.error("Admin stats error:", err);
    res.status(500).json({ message: "Failed to load stats" });
  }
});

// FIXED → GET recent bookings
router.get("/recent-bookings", adminAuth, async (req, res) => {
  try {
    const recent = await Booking.find()
      .populate("user", "name")     // fixed: correct field name
      .populate("tour", "title")    // fixed: correct field name
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({ bookings: recent });
  } catch (err) {
    console.error("Recent bookings error:", err);
    res.status(500).json({ message: "Failed to load recent bookings" });
  }
});

export default router;

