import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  // Check header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      return next();  // ✅ IMPORTANT: STOP function here
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, invalid token" });
    }
  }

  // If no token at all
  return res.status(401).json({ message: "Not authorized, no token" });
};
