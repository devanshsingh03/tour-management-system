// backend/middleware/adminAuth.js
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export default async function adminAuth(req, res, next) {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied, no token" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || decoded.role !== "admin") {
      return res.status(403).json({ message: "Not an admin" });
    }

    const admin = await Admin.findById(decoded.id).select("-password");
    if (!admin) {
      return res.status(401).json({ message: "Admin not found" });
    }

    req.admin = admin;
    return next();
  } catch (err) {
    console.error("adminAuth error:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
