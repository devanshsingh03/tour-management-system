 import mongoose from "mongoose";

// const bookingSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     tour: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Tour",
//       required: true,
//     },

//     travelers: {
//       type: Number,
//       required: true,
//       min: 1,
//       default: 1,
//     },

//     dateOfTravel: {
//       type: Date,
//       required: true,
//     },

//     amount: {
//       type: Number,
//       required: true,
//       min: 0,
//     },

//     status: {
//       type: String,
//       enum: ["Pending", "Confirmed", "Cancelled"],
//       default: "Pending",
//     },
//   },
//   { timestamps: true }
// );

 

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tour: { type: mongoose.Schema.Types.ObjectId, ref: "Tour", required: true },
    travelers: { type: Number, required: true },
    dateOfTravel: { type: Date, required: true },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
  type: String,
  enum: ["pending", "paid", "failed"],
  default: "pending",
},
paymentId: {
  type: String,
},

  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);