import express from "express";
import "../db.js";
import todoSchema from "../schema/todoSchema.js";

export const todoRouter = express.Router();

todoRouter.get("/:author", (req, res) => {
  const { author } = req.params;
  todoSchema.find({ author }, function (err, todos) {
    if (err) return res.status(500).send("todo를 못찾았어요.");
    if (!todos) return res.status(404).send("todo가 없어요!");
    res.status(200).json(todos);
  });
});

todoRouter.post("/", (req, res) => {
  const todo = new todoSchema(req.body);
  todo.save(function (err, item) {
    if (err) return res.status(500).send("todo를 추가하지 못했어요!");
    res.status(200).json({ id: item._id });
  });
});

todoRouter.put("/:author/:id", (req, res) => {
  const { author, id } = req.params;
  todoSchema.updateOne({ author, _id: id, ...req.body }, function (err, todo) {
    if (err) return res.status(500).send("todo 수정 실패!");
    if (!todo) return res.status(404).send("todo가 없어요!");
    res.status(200).json("수정 성공!");
  });
});

todoRouter.delete("/:author/:id", (req, res) => {
  const { author, id } = req.params;
  todoSchema.updateOne({ author, _id: id, state: 3 }, function (err, todo) {
    if (err) return res.status(500).send("todo 삭제 실패!");
    if (!todo) return res.status(404).send("todo가 없어요!");
    res.status(200).json("삭제 성공!");
  });
});
