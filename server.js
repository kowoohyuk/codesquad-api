import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { todoRouter } from "./router/todoRouter.js";
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/todo", todoRouter);

app.listen(PORT, function () {
  console.log(`port : ${PORT} server started, used cors`);
});
