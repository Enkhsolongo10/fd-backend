import mongoose, { Schema } from 'mongoose';

const FOOD_SCHEMA = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    ingredients: { type: String },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FoodCategory', 
      required: true
    }
  }
);

export const FoodModel = mongoose.model('Food', FOOD_SCHEMA, 'foods'); 