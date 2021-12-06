import { Schema, model } from "mongoose";

let orderStatusEnum = [
  "Pendiente por despacho",
  "Cancelada",
  "Cancelada",
  "Finalizada"
];
const orderSchema = new Schema(
  {
    product: {
      type: String,
      required: true
    },
    username: String,
    description: String,
    quantity: {
      type: Number,
      unique: true,
      required: true
    },
    vehicles: {
      type: Number,
      unique: true,
      required: true
    },
    origin: {
      type: String,
      unique: true,
      required: true
    },
    destiny: {
      type: String,
      unique: true,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    },
    createdBy: String,
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
