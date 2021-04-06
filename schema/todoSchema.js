import mongoose from "mongoose";
const todoSchema = new mongoose.Schema(
  {
    title: String,
    state: String, // 0 : Done, 1 : To Do, 2 : Doing, 3 : 삭제
    author: String,
    content: String,
    color: { type: String, default: "#000000" },
    bg_color: { type: String, default: "#ffffff" },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
export default mongoose.model("todo", todoSchema);
