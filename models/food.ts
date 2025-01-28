import { model, models, Schema } from "mongoose";
import { FoodCategoryModel } from "./food-category";

const FOOD_SCHEMA = new Schema(
    {
        name: String,
        ingredients: String,
        image: String,
        price: String,
        category: {
            type: Schema.Types.ObjectId,
            ref: "FoodCategory"
        },
    },
    {timestamps: true}
);

const FoodModel = models ['Food'] || model(
    'Food', 
    FOOD_SCHEMA, 
);

export { FoodModel };