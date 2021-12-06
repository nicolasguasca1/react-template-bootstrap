import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

export const STATUS = ["activo", "inactivo"];

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate(value) {
        if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
          throw new Error("Email no válido.");
        }
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    address: String,
    company: String,
    phone: Number,
    name: String,
    industry: String,
    active: {
      type: Boolean,
      default: true
    },
    roles: [
      {
        ref: "Role",
        type: mongoose.ObjectId
      }
    ],
    orders: [
      {
        ref: "Order",
        type: mongoose.Schema.ObjectId
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
