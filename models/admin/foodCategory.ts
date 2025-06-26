import mongoose, { Schema, Document } from "mongoose";

type FoodCategoryType = Document & {
  name: string;
};

const FOOD_CATEGORY_SCHEMA = new Schema<FoodCategoryType>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const FoodCategoryModel = mongoose.model<FoodCategoryType>(
  "FoodCategory", // model name for Mongoose's internal registry
  FOOD_CATEGORY_SCHEMA, // schema definition
  "foodcategories" // collection name in mongodb
);