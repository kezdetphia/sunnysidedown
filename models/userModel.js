import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 255,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      max: 255,
    },
    password: {
      type: String,
      min: 2,
      max: 40,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);

// module.exports = User = mongoose.model("User", userSchema);
