import { configDotenv } from "dotenv";
configDotenv(); // Load environment variables from .env file if it hasn't got that we can't connect to the database

import express from 'express'; 
import { foodCategoryRouter } from "./router/admin/food-category"; // import the API for food categories
import { foodRouter } from "./router/admin/food";

const mongoose = require('mongoose'); // MongoDB connection library (we can use it easier with TypeScript)
const cors = require('cors'); // sharing resources between different origins
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json()); // convert incoming JSON requests to JavaScript objects

export const connectToDb = async () => {
    const URI_fromenv = process.env.MONGODB_URI; 
    if(!URI_fromenv) {
        throw new Error( //throw new Error(...) is how you create your own error when something important is missing or wrong.(manually)
            'Database connection URI is not defined in environment variables.'
        );
    }; //it is important to check if the URI is defined before trying to connect to the database.
    
    try{
        await mongoose.connect(URI_fromenv);
        console.log('Succesfully connected to the MongoDB database.');
    } catch(error){ //The catch(error) block catches any error thrown inside the try block, including errors you throw manually.
        console.error('Failed to connect the MongoDB database:', error);
        process.exit(1); //it is optional, This will stop the Node.js process if the connection fails. 1 means an error occurred.
    };
};

connectToDb();

app.use('/admin/food-category', foodCategoryRouter);
app.use('/admin/food', foodRouter); 

app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});