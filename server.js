import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { todoRouter } from './router/todoRouter.js';
import { todoRouterV2 } from './router/todoRouterV2.js';
import { todoRouterV3 } from './router/todoRouterV3.js';
import { sidedishRouter } from './router/sidedishRouter.js';
import { airbnbRouter } from './router/airbnbRouter.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/todo', todoRouter);

app.use('/todo/v2', todoRouterV2);

app.use('/todo/v3', todoRouterV3);

app.use('/sidedish', sidedishRouter);

app.use('/airbnb/price', airbnbRouter);

app.listen(PORT, function () {
  console.log(`port : ${PORT} server started, used cors`);
});
