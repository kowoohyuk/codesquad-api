import express from "express";
import "../db.js";
import { todoSchema } from "../schema/todoSchemaV2.js";

export const todoRouterV2 = express.Router();
todoRouterV2.get("/:author", (req, res) => {
  const { author } = req.params;
  todoSchema.find({ author, state: { $ne: 0 } }, function (err, todos) {
    if (err) return res.status(500).send("todo를 못찾았어요.");
    if (!todos) return res.status(404).send("todo가 없어요!");
    res.status(200).json(todos);
  });
});

todoRouterV2.post("/", (req, res) => {
  const { author, id } = req.body;
  if (id) {
    todoSchema.updateOne(
      { author, _id: id },
      { $set: { ...req.body } },
      function (err, item) {
        if (item.n === 0)
          return res
            .status(200)
            .send("아이디 또는 작성자가 존재하지 않습니다!");
        if (err) return res.status(500).send("todo 수정 실패!");
        if (!item) return res.status(404).send("todo가 없어요!");
        res.status(200).json({ id: item._id });
      }
    );
  } else {
    const todo = new todoSchema(req.body);
    todo.save(function (err, item) {
      if (err) return res.status(500).send("todo를 추가하지 못했어요!");
      res.status(200).json({ id: item._id });
    });
  }
});

todoRouterV2.put("/", (req, res) => {
  const { author, id } = req.body;
  todoSchema.updateOne(
    { author, _id: id },
    { $set: { ...req.body } },
    function (err, todo) {
      if (todo.n === 0)
        return res.status(200).send("아이디 또는 작성자가 존재하지 않습니다!");
      if (err) return res.status(500).send("todo 수정 실패!");
      if (!todo) return res.status(404).send("todo가 없어요!");
      res.status(200).json("수정 성공!");
    }
  );
});

todoRouterV2.delete("/", (req, res) => {
  const { author, id } = req.body;
  todoSchema.updateOne(
    { author, _id: id },
    { $set: { ...req.body } },
    function (err, todo) {
      if (todo.n === 0)
        return res.status(200).send("아이디 또는 작성자가 존재하지 않습니다!");
      if (err) return res.status(500).send("todo 삭제 실패!");
      if (!todo) return res.status(404).send("todo가 없어요!");
      res.status(200).json("삭제 성공!");
    }
  );
});
