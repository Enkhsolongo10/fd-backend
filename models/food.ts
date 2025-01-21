import { model, models, Schema } from "mongoose";
import { FoodCategoryModel } from "./food-category";

const FOOD_SCHEMA = new Schema(
    {
        name: String,
        category: {type: Schema.Types.ObjectId, ref: FoodCategoryModel},
        ingredients: String,
        image: String,
        price: Number,
        _id: String
    },
    {timestamps: true}
);

const FoodModel = models['Food'] || model(
    'Food', 
    FOOD_SCHEMA, 
);

export { FoodModel };