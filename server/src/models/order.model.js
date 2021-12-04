import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    product: String,
    username: String,
    description: String,
    quantity: Number,
    vehicles: Number,
    origin: String,
    destiny: String,
    status: String,
    comments: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Order", orderSchema);
