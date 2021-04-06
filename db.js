import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const {
  env: { DB_PASSWORD, DB_NAME },
} = process;

mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);
export default mongoose.connect(
  `mongodb+srv://admin:${DB_PASSWORD}@wooluck.c3ppg.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  function (err) {
    if (err) {
      console.error("mongodb connection error", err);
    }
    console.log("mongodb connected");
  }
);
