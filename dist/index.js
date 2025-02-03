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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const food_category_1 = require("./router/food-category");
const food_1 = require("./router/food");
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 8000;
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
(0, dotenv_1.configDotenv)();
// const URI_fromenv = process.env.MONGODB_URI;
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const URI_fromenv = process.env.MONGODB_URI;
    if (!URI_fromenv) {
        throw new Error('Database connection URI is not defined in environment variables.');
    }
    ;
    try {
        yield mongoose.connect(URI_fromenv);
        console.log('Succesfully connected to the MongoDB database.');
    }
    catch (error) {
        console.error('Failed to connect the MongoDB database:', error);
        process.exit(1);
    }
    ;
});
exports.connectToDb = connectToDb;
(0, exports.connectToDb)();
app.use('/food-category', food_category_1.foodCategoryRouter);
app.use('/food', food_1.foodRouter);
app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});
