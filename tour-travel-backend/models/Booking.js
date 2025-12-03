// // models/Booking.js
// import mongoose from "mongoose";

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
//     },

//     tourName: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     image: {
//       type: String,
//       trim: true,
//     },

//     date: {
//       type: Date,
//       required: true,
//     },

//     travelers: {
//       type: Number,
//       required: true,
//       min: 1,
//     },

//     price: {
//       type: Number,
//       required: true,
//       min: 0,
//     },

//     status: {
//       type: String,
//       enum: ["Pending", "Confirmed", "Cancelled"],
//       default: "Confirmed",
//     },
//   },
//   { timestamps: true }
// );

// const Booking = mongoose.model("Booking", bookingSchema);
// export default Booking;


import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    travelers: {
      type: Number,
      default: 1,
    },
    amount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
