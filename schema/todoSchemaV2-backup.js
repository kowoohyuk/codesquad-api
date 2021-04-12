import mongoose from "mongoose";

// this.find(query).populate('posts').exec();

export const userSchema = mongoose.model(
  "user",
  new mongoose.Schema({
    author: { type: String, required: true, unique: true },
    columnList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "todoColumn",
      },
    ],
  })
);

export const todoColumnSchema = mongoose.model(
  "todoColumn",
  new mongoose.Schema(
    {
      author: String,
      title: String,
      state: String, // default 1, 삭제 0
      todoList: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "todoItem",
        },
      ],
      user: String,
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
      state: String,
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
