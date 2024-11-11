import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String
    },
    subscribers:{
      type: Number,
      default: 0
    },
    subscribedTo: {
      type:[String]
    }
  },
  {
    timestamps: true
  }
)

export const User = mongoose.model("User",userSchema)