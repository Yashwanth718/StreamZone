import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    userId:{
      type:String,
      required: true
    },
    videoId:{
      type:String,
      required:true
    },
    comment:{
      type:String,
      required:true
    }
  },
  {
    timestamps:true
  }
)

export const Comment = mongoose.model("Comment",commentSchema)