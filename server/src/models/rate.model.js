import { Schema, model } from "mongoose";

let invoiceRateType = ["Plena", "Reducida", "Preferencial"];

const rateSchema = new Schema(
  {
    name: {
      type: String,
      enum: invoiceRateType
    },
    fee: {
      type: Number,
      required: true
    },
    discount: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Rate", rateSchema);
