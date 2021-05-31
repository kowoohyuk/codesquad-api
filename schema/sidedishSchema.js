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
