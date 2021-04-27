import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const sidedishSchema = mongoose.model(
  "sidedish",
  new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    childs: [
      { type: Schema.Types.ObjectId, ref: "sidedish-detail", default: [] },
    ],
  })
);

export const sidedishDetailSchema = mongoose.model(
  "sidedish-detail",
  new mongoose.Schema({
    hash: Number,
    title: String,
    description: String,
    main_image: String,
    alt: String,
    price: Number,
    discount: Number,
    label: Array,
    img: String,
    stock: Number,
    point: {
      type: Number,
      default: 0,
    },
    thumbnail_images: Array,
    delivery_fee: Array,
    delivery_info: String,
  })
);

/*
  "detail_hash": "H9881",
  "image": "https://cdn.bmf.kr/_data/product/H9881/f2a7b4df359c850b1a9eb57e17ddf6fc.jpg",
  "alt": "[소중한식사] 경상도 한상차림",
  "delivery_type": ["새벽배송", "전국택배"],
  "title": "[소중한식사] 경상도 한상차림",
  "description": "경상도 명물 요리 세 가지를 한 상에!",
  "n_price": "39,000",
  "s_price": "31,200원",
  "badge": ["이벤트특가"]
*/
