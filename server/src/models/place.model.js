import { Schema, model } from "mongoose";

let orderStatusEnum = [
  "Pendiente por despacho",
  "Cancelada",
  "Cancelada",
  "Finalizada"
];
const placeSchema = new Schema(
  {
    name: String,
    dist_to_warehouse: Number,
    active: {
      type: Boolean,
      default: true
    },
    createdBy: String,
    comments: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Place", placeSchema);
