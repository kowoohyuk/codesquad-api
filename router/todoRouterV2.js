import express from "express";
import "../db.js";
import { todoColumnSchema, todoSchema } from "../schema/todoSchemaV2.js";
import { historySchema } from "../schema/historySchema.js";

console.log(historySchema);
export const todoRouterV2 = express.Router();

todoRouterV2.get("/:author", (req, res) => {
  const { author } = req.params;
  todoColumnSchema
    .find({ author, state: { $ne: 0 } }, function (err, todos) {
      if (err) return res.status(500).send("todo를 못찾았어요.");
      if (!todos) return res.status(404).send("todo가 없어요!");
      res.status(200).json(todos);
    })
    .exec();
});

todoRouterV2.get("/history/:author", (req, res) => {
  const { author } = req.params;
  historySchema
    .find({ author }, function (err, todos) {
      if (err) return res.status(500).send("history를 못찾았어요.");
      res.status(200).json(todos);
    })
    .sort({ createdAt: 1 });
});

todoRouterV2.post("/", (req, res) => {
  const todo = new todoSchema(req.body);
  todo.save(function (err, item) {
    if (err) return res.status(500).send("todo를 추가하지 못했어요!");
    const author = req.body.author;
    const text = req.body.text;
    console.log(author, history);
    const history = new historySchema({ author, text });
    history.save(function (err, _) {
      if (err) return res.status(500).send("history를 추가하지 못했어요!");
    });
    res.status(200).json({ id: item._id });
  });
});

todoRouterV2.put("/:author/:id", (req, res) => {
  const { author, id } = req.params;
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

todoRouterV2.delete("/:author/:id", (req, res) => {
  const { author, id } = req.params;
  todoSchema.updateOne(
    { author, _id: id },
    { $set: { state: 3 } },
    function (err, todo) {
      if (todo.n === 0)
        return res.status(200).send("아이디 또는 작성자가 존재하지 않습니다!");
      if (err) return res.status(500).send("todo 삭제 실패!");
      if (!todo) return res.status(404).send("todo가 없어요!");
      res.status(200).json("삭제 성공!");
    }
  );
});
