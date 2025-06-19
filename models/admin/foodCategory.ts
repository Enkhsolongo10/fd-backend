import mongoose, { Schema, Document } from 'mongoose';

type FoodCategoryType = Document & {
  name: string;
};

const foodCategorySchema = new Schema<FoodCategoryType>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const FoodCategoryModel = mongoose.model<FoodCategoryType>(
  'FoodCategory',
  foodCategorySchema
);
