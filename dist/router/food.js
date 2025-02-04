"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRouter = void 0;
const express_1 = require("express");
const food_1 = require("../models/food");
exports.foodRouter = (0, express_1.Router)();
exports.foodRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield food_1.FoodModel.find({}).populate('category');
}));
exports.foodRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const item = yield food_1.FoodModel.findById(id);
    res.json(item);
}));
exports.foodRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { name, category, image, price, ingredients } = req.body;
    const newFood = yield food_1.FoodModel.create({
        category,
        name,
        image,
        price,
        ingredients
    });
    res.json(newFood);
}));
exports.foodRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedItem = yield food_1.FoodModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
}));
exports.foodRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedItem = yield food_1.FoodModel.findByIdAndUpdate(req.params.id, {
        categoryName: req.body.categoryName,
    }, { new: true });
    res.json(updatedItem);
}));
// create dr bsn code shuu 
// try{
//     const newItem = await FoodModel.create(body);
//     res.json({newItem, message:"nemegdlee"});
// }catch(e){
//     console.error(e, "aldaa")
// }
