// // // import Admin from "../models/Admin.js";
// // // import bcrypt from "bcryptjs";
// // // import jwt from "jsonwebtoken";

// // // export const adminSignup = async (req, res) => {
// // //   try {
// // //     const { name, email, password } = req.body;

// // //     const existingAdmin = await Admin.findOne({ email });
// // //     if (existingAdmin)
// // //       return res.status(400).json({ message: "Admin already exists" });

// // //     const hashedPassword = await bcrypt.hash(password, 10);

// // //     const admin = new Admin({
// // //       name,
// // //       email,
// // //       password: hashedPassword,
// // //       role: "admin",
// // //     });

// // //     await admin.save();

// // //     res.json({ message: "Admin created successfully" });
// // //   } catch (err) {
// // //     res.status(500).json({ message: "Server error", error: err.message });
// // //   }
// // // };

// // // export const adminLogin = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;

// // //     const admin = await Admin.findOne({ email });
// // //     if (!admin)
// // //       return res.status(400).json({ message: "Admin does not exist" });

// // //     const validPass = await bcrypt.compare(password, admin.password);
// // //     if (!validPass)
// // //       return res.status(400).json({ message: "Invalid password" });

// // //     const token = jwt.sign(
// // //       { id: admin._id, role: admin.role },
// // //       process.env.JWT_SECRET,
// // //       { expiresIn: "7d" }
// // //     );

// // //     res.json({
// // //       message: "Admin login successful",
// // //       token,
// // //       role: "admin",
// // //     });
// // //   } catch (err) {
// // //     res.status(500).json({ message: "Server error", error: err.message });
// // //   }
// // // };

// // import Admin from "../models/Admin.js";
// // import bcrypt from "bcryptjs";
// // import jwt from "jsonwebtoken";

// // // SECRET ADMIN KEY
// // const SECRET_ADMIN_KEY = "DEV100";

// // export const adminSignup = async (req, res) => {
// //   try {
// //     const { name, email, password, secretKey } = req.body;

// //     // check secret key
// //     if (secretKey !== SECRET_ADMIN_KEY) {
// //       return res.status(401).json({ message: "Invalid Secret Key" });
// //     }

// //     // check if admin exists
// //     const existing = await Admin.findOne({ email });
// //     if (existing) {
// //       return res.status(400).json({ message: "Admin already exists" });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const admin = await Admin.create({
// //       name,
// //       email,
// //       password: hashedPassword,
// //       role: "admin",
// //     });

// //     res.json({ message: "Admin created successfully", admin });
// //   } catch (err) {
// //     res.status(500).json({ message: "Server Error", error: err.message });
// //   }
// // };

// // export const adminLogin = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     const admin = await Admin.findOne({ email });
// //     if (!admin) return res.status(404).json({ message: "Admin not found" });

// //     const isPassCorrect = await bcrypt.compare(password, admin.password);
// //     if (!isPassCorrect)
// //       return res.status(401).json({ message: "Incorrect Password" });

// //     const token = jwt.sign(
// //       { id: admin._id, role: admin.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: "7d" }
// //     );

// //     res.json({
// //       message: "Admin Logged In",
// //       token,
// //       admin: {
// //         id: admin._id,
// //         name: admin.name,
// //         email: admin.email,
// //         role: admin.role,
// //       },
// //     });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };


// import Admin from "../models/Admin.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";


// // ⭐ ADMIN SIGNUP
// exports.adminSignup = async (req, res) => {
//   try {
//     const { name, email, password, secretKey } = req.body;

//     if (secretKey !== process.env.ADMIN_SECRET_KEY) {
//       return res.status(400).json({ message: "Invalid secret key" });
//     }

//     const existing = await Admin.findOne({ email });
//     if (existing) return res.status(400).json({ message: "Admin already exists" });

//     const hashed = await bcrypt.hash(password, 10);

//     const admin = await Admin.create({
//       name,
//       email,
//       password: hashed,
//       secretKeyUsed: true
//     });

//     res.status(201).json({ message: "Admin created successfully", admin });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

// // ⭐ ADMIN LOGIN
// exports.adminLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const admin = await Admin.findOne({ email });
//     if (!admin) return res.status(400).json({ message: "Admin not found" });

//     const match = await bcrypt.compare(password, admin.password);
//     if (!match) return res.status(400).json({ message: "Invalid password" });

//     const token = jwt.sign(
//       { id: admin._id, role: "admin" },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.json({
//       message: "Login successful",
//       token,
//       admin: { id: admin._id, name: admin.name, email: admin.email },
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };


// controllers/adminController.js
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// -------------------------- ADMIN SIGNUP --------------------------
export const adminSignup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, secretKey } = req.body;

    // Secret key check
    if (secretKey !== process.env.ADMIN_SECRET_KEY) {
      return res.status(400).json({ message: "Invalid admin secret key" });
    }

    // Password check
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Existing admin check
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
      role: "admin",
    });

    await newAdmin.save();

    return res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// -------------------------- ADMIN LOGIN --------------------------
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      message: "Admin login successful",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};


