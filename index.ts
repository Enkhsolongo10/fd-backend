import { configDotenv } from "dotenv";
configDotenv(); 

import express from 'express'; 
import { foodRouter } from "./router/food";
import { foodCategoryRouter } from "./router/food-category";

const mongoose = require('mongoose');
const cors = require('cors'); 
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

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

app.use('/food-category', foodCategoryRouter);
app.use('/food', foodRouter); 

app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});