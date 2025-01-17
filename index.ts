import { configDotenv } from "dotenv"; //ene n .env dotroos medeelel awah zorilgotoi ym shig bn
import express, { Request, Response } from 'express'; //end bga express-iig can't get it!!!!
import {Collection, connect, model, Schema} from "mongoose";

const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

configDotenv();
const URI_fromenv = process.env.MONGODB_URI;
console.log(URI_fromenv);

// CONNECT TO MONGO DB 
export const connectToDb = async () => {
    const URI_fromenv = process.env.MONGODB_URI; 
    if(!URI_fromenv) {
        throw new Error(
            'Database connection URI is not defined in environment variables.'
        );
    };
    
    try{
        await mongoose.connect(URI_fromenv);
        console.log('Succesfully connected to the MongoDB database.');
    } catch(error){
        console.error('Failed to connect the MongoDB database:', error);
        process.exit(1); 
    };
};
connectToDb(); 

// MODEL, SCHEMA, CRUD
const FOOD_CATEGORY_SCHEMA = new Schema(
    {
        categoryName: String,
    },
    {timestamps: true}
);

const FoodCategoryModel = model('FoodCategory', FOOD_CATEGORY_SCHEMA, 'food-category');

app.get('/food-category/', async (req: Request, res: Response) => {
    const allData = await FoodCategoryModel.find(); 
    res.json(allData);
});

app.get('/food-category/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const item = await FoodCategoryModel.findById(id);
    res.json(item);
});

app.post('/food-category', async (req: Request, res: Response) => {
    const newItem = await FoodCategoryModel.create({
        categoryName: req.body.categoryName,
    });
    res.json({newItem, message:"nemegdlee"}); //neg negeeree 
});

app.delete('/food-category/:id', async (req: Request, res: Response) => {
    const deletedItem = await FoodCategoryModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
});

app.put('/food-category/:id', async (req: Request, res: Response) => {
    const updatedItem = await FoodCategoryModel.findByIdAndUpdate(
        req.params.id,
        {
        categoryName: req.body.categoryName,
        },
        { new: true }
    );
    res.json(updatedItem);
});

app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
}); 
``