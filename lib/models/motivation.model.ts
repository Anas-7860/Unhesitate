import mongoose from "mongoose";

const MotivationSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      index: true,
    },

    username: {
      type: String,
      required: true,
    },

    userImage: {
      type: String,
      required: true,
    },

    quote: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300,
    },

    author: {
      type: String,
      default: "",
      trim: true,
      maxlength: 80,
    },

    category: {
      type: String,
      default: "",
      trim: true,
      maxlength: 40,
    },
  },
  { timestamps: true }
);

const Motivation =
  mongoose.models.Motivation ||
  mongoose.model("Motivation", MotivationSchema);

export default Motivation;
