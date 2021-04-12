import mongoose from "mongoose";

// this.find(query).populate('posts').exec();

export const todoColumnSchema = mongoose.model(
  "todoColumn",
  new mongoose.Schema(
    {
      author: String,
      title: String,
      state: { type: Number, default: 1 }, // 0 : 삭제
      todoList: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "todoItem",
        },
      ],
      color: { type: String, default: "#000000" },
      bg_color: { type: String, default: "#ffffff" },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  )
);

export const todoSchema = mongoose.model(
  "todoItem",
  new mongoose.Schema(
    {
      title: String,
      state: { type: Number, default: 1 }, // 0 : 삭제
      content: String,
      todoColumn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "todoColumn",
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  )
);
