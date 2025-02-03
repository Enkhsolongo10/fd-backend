"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModel = void 0;
const mongoose_1 = require("mongoose");
const FOOD_SCHEMA = new mongoose_1.Schema({
    foodName: String,
    price: Number,
    ingredients: String,
    // category: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'FoodCategory',
    // },
    image: String,
}, { timestamps: true });
const FoodModel = mongoose_1.models['Foods'] ||
    (0, mongoose_1.model)('Food', FOOD_SCHEMA, 'foods');
exports.FoodModel = FoodModel;
