import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Burger = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 9.0 },
    ingredients: { type: Array, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Burger;
