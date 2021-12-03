import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    address: String,
    company: String,
    phone: Number,
    name: String,
    industry: String,
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("User", userSchema);
