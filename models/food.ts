import { model, models, Schema } from "mongoose";
import { FoodCategoryModel } from "./food-category";

const FOOD_SCHEMA = new Schema(
    {
        foodName: String,
        price: Number,
        ingredients: String,
        category: {
            type: Schema.Types.ObjectId,
            ref: 'FoodCategory',
        },
        image: String,
    },
    {timestamps: true}
);

const FoodModel = 
models['Foods'] || 
model('Food', FOOD_SCHEMA, 'foods');

export { FoodModel };