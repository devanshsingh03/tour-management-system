import express from "express";
import auth from "../middleware/auth.js";
import {
  createPaymentOrder,
  verifyPayment,
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/create-order", auth, createPaymentOrder);
router.post("/verify", auth, verifyPayment);

export default router;
