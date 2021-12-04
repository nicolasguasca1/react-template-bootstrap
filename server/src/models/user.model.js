import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    address: String,
    company: String,
    phone: Number,
    name: String,
    industry: String,
    roles: [
      {
        ref: "Role",
        type: mongoose.ObjectId
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("User", userSchema);
