import { model, models, Schema } from "mongoose";
import { FoodCategoryModel } from "./food-category";

const FOOD_SCHEMA = new Schema(
    {
        foodName: {type: String},
        category: {type: Schema.Types.ObjectId, ref: FoodCategoryModel},
        ingredients: String,
        image: String,
        price: Number
    },
    {timestamps: true}
);

const FoodModel = models['Food'] || model(
    'Food', 
    FOOD_SCHEMA, 
);

export { FoodModel };