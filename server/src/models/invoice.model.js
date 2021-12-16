import { Schema, model } from "mongoose";

let invoiceRateType = ["Plena", "Reducida", "Preferencial"];

const invoiceSchema = new Schema(
  {
    distance: {
      type: Number,
      required: true
    },
    estimated_cost: {
      type: Number,
      required: true
    },
    orderId: {
      type: String,
      unique: true,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    },
    rate: {
      ref: "Rate",
      type: Schema.Types.ObjectId
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Invoice", invoiceSchema);
