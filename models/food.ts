import { model, models, Schema } from "mongoose";
import { FoodCategoryModel } from "./food-category";

const FOOD_SCHEMA = new Schema(
    {
        name: String,
        category: Schema.Types.ObjectId,
        ingredients: String,
        image: String,
        price: String,
    },
    {timestamps: true}
);

const FoodModel = models['Food'] || model(
    'Food', 
    FOOD_SCHEMA, 
);

export { FoodModel };