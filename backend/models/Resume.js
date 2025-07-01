import mongoose, { mongo } from "mongoose";

const resumeSchema = mongoose.Schema({
  fileName: String,
  filePath: String,
  content: Object,
  createdAt: { type: Date, default: Date.now },

  // userId:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
});

module.exports = mongoose.model("Resume", resumeSchema);
