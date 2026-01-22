import Razorpay from "razorpay";
import crypto from "crypto";
import Booking from "../models/Booking.js";

/**
 * Lazily create Razorpay instance
 * (prevents env-loading / ESM import issues)
 */
const getRazorpayInstance = () => {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error("Razorpay keys are missing in environment variables");
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
};

// ============================
// CREATE PAYMENT ORDER
// ============================
export const createPaymentOrder = async (req, res, next) => {
  try {
    const { bookingId } = req.body;

    if (!bookingId) {
      return res.status(400).json({ message: "Booking ID is required" });
    }

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (booking.paymentStatus === "paid") {
      return res.status(400).json({ message: "Booking already paid" });
    }

    const razorpay = getRazorpayInstance();

    const order = await razorpay.orders.create({
      amount: booking.amount * 100, // INR → paise
      currency: "INR",
      receipt: `booking_${booking._id}`,
    });

    res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID, // frontend needs this
    });
  } catch (error) {
    next(error);
  }
};


// export const verifyPayment = async (req, res, next) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       bookingId,
//     } = req.body;

//     if (
//       !razorpay_order_id ||
//       !razorpay_payment_id ||
//       !razorpay_signature ||
//       !bookingId
//     ) {
//       return res.status(400).json({ message: "Incomplete payment data" });
//     }

//     const body = razorpay_order_id + "|" + razorpay_payment_id;

//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== razorpay_signature) {
//       await Booking.findByIdAndUpdate(bookingId, {
//         paymentStatus: "failed",
//       });

//       return res.status(400).json({ message: "Payment verification failed" });
//     }

//     await Booking.findByIdAndUpdate(bookingId, {
//       paymentStatus: "paid",
//       paymentId: razorpay_payment_id,
//     });

//     res.status(200).json({ message: "Payment successful" });
//   } catch (error) {
//     next(error);
//   }
// };

export const verifyPayment = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    bookingId,
  } = req.body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(sign)
    .digest("hex");

  if (expectedSign !== razorpay_signature) {
    await Booking.findByIdAndUpdate(bookingId, {
      paymentStatus: "failed",
    });
    return res.status(400).json({ message: "Payment verification failed" });
  }

  // ✅ PAYMENT SUCCESS → AUTO CONFIRM BOOKING
  await Booking.findByIdAndUpdate(bookingId, {
    paymentStatus: "paid",
    status: "confirmed",
    paymentId: razorpay_payment_id,
  });

  res.json({ message: "Payment successful & booking confirmed" });
};

