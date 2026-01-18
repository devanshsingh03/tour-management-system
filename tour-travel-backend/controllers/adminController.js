
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";


// CREATE ADMIN
export const adminSignup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, secretKey } = req.body;

    if (!name || !email || !password || !secretKey)
      return res.status(400).json({ message: "All fields required" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    // master secret key (only YOU know this)
    if (secretKey !== process.env.ADMIN_SECRET_KEY)
      return res.status(403).json({ message: "Invalid secret key" });

    const exists = await Admin.findOne({ email });
    if (exists) return res.status(400).json({ message: "Admin already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: hashed,
      secretKey,
    });

    res.json({ message: "Admin created successfully", admin });
  } catch (err) {
    return res.status(500).json({ message: "Signup failed", error: err.message });
  }
};


// LOGIN ADMIN
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login success",
      token,
      role: "admin",
      admin: {
        name: admin.name,
        email: admin.email,
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
