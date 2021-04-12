import mongoose from "mongoose";

export const todoSchema = mongoose.model(
  "todoContainer",
  new mongoose.Schema({
    author: { type: String, required: true },
    todoColumns: { type: Array, default: [] },
  })
);
