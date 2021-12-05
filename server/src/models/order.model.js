import { Schema, model } from "mongoose";

let orderStatusEnum = [
  "Pendiente por despacho",
  "Cancelada",
  "Cancelada",
  "Finalizada"
];
const orderSchema = new Schema(
  {
    product: String,
    username: String,
    description: String,
    quantity: Number,
    vehicles: Number,
    origin: String,
    destiny: String,
    active: {
      type: Boolean,
      default: true
    },
    status: {
      type: String,
      enum: orderStatusEnum,
      default: "Pendiente por despacho"
    },
    comments: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Order", orderSchema);
