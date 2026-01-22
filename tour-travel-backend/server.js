
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import tourRoutes from "./routes/tourRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";



const app = express();
if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is missing");
}
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing");
}

console.log("SERVER RAZORPAY KEY ID:", process.env.RAZORPAY_KEY_ID);
console.log("SERVER RAZORPAY KEY SECRET:", process.env.RAZORPAY_KEY_SECRET);


// Middlewares
app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/user" , userRoutes);
app.use("/api/payments", paymentRoutes);

//Error Handler 
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error"
  });
});

//router.post("/add")
// Test route
app.get("/", (req, res) => {
  res.send("Backend running successfully...");
});

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
