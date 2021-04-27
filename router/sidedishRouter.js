import express from "express";
import "../db.js";
import {
  sidedishSchema,
  sidedishDetailSchema,
} from "../schema/sidedishSchema.js";

export const sidedishRouter = express.Router();

sidedishRouter.get("/main", (req, res) => {
  sidedishSchema
    .find({ type: "main" }, function (err, item) {
      res.status(200).json(item);
    })
    .populate({
      path: "childs",
    });
});

sidedishRouter.get("/best", (req, res) => {
  sidedishSchema
    .find({ type: "best" }, function (err, item) {
      res.status(200).json(item);
    })
    .populate({
      path: "childs",
    });
});

sidedishRouter.get("/detail/:id", (req, res) => {
  const { id } = req.params;
  sidedishDetailSchema.findOne({ _id: id }, function (err, item) {
    res.status(200).json(item);
  });
});

sidedishRouter.get("/buy/:id/:stock", (req, res) => {
  const { id, stock } = req.params;
  sidedishDetailSchema.findOne({ _id: id }, function (err, item) {
    const obj = {};
    if (item.stock < stock) {
      obj.result = false;
      obj.message = "재고가 부족합니다!";
    } else {
      obj.result = true;
    }
    res.status(200).json(obj);
  });
});

// sidedishRouter.get("/updatee", (req, res) => {
//   sidedishDetailSchema.find({}, function (err, item) {
//     for (let i = 0; i < item.length; i++) {
//       sidedishDetailSchema.updateOne(
//         { _id: item[i]._id },
//         {
//           $set: {
//             delivery_fee: ["2,500원", "(40,000원 이상 구매 시 무료)"],
//           },
//         },
//         function (err, result) {
//           console.log("^^");
//         }
//       );
//     }
//   });
// });
