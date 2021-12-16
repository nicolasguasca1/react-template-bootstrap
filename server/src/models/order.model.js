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
      required: true
    },
    vehicles: {
      type: Number,
      required: true
    },
    origin: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    },
    distance: Number,
    createdBy: String,
    // NECESITA SER ESCRITA EN UN MIDDLEWARE
    estimated_cost: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: orderStatusEnum,
      default: "Pendiente por despacho"
    },
    invoice_id: String,
    comments: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Order", orderSchema);
