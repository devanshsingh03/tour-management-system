// middleware/auth.js
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

  const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role }
    next();
  } catch (error) {
    console.error("Token error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.user.id);

    if (!admin) {
      return res.status(403).json({ message: "Admin access required" });
    }

    next();
  } catch (error) {
    console.error("Admin check failed:", error);
    return res.status(500).json({ message: "Admin verification failed" });
  }
};

export default auth;