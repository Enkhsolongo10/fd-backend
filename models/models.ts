import mongoose, { Schema, Document } from "mongoose";

const FOOD_CATEGORY_SCHEMA = new mongoose.Schema(
  {
    name: { type: String,  required: true },
  },
  { timestamps: true }
);

const FOOD_SCHEMA = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    ingredients: { type: String },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category', 
      required: true
    }
  }
);

export const FoodCategoryModel = mongoose.model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "foodcategories"
);

export const FoodModel = mongoose.model('Food', FOOD_SCHEMA,'foods'); 