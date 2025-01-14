import { configDotenv } from "dotenv"; //ene n .env dotroos medeelel awah zorilgotoi ym shig bn
import express, { Request, Response } from 'express'; //end bga express-iig can't get it!!!!

const PORT = 4000;
const app = express();
app.use(express.json());

configDotenv();
const URI_fromenv = process.env.MONGODB_URI;
console.log(URI_fromenv);

// connect to mongodb 
export const connectToDb = async () => {
    const URI_fromenv = process.env.MONGODB_URI; 
    if(!URI_fromenv) {
        throw new Error(
            'Database connection URI is not defined in environment variables.'
        );
    };
    
};

app.get('/', async (req: Request, res: Response) => {
    res.send('Hello world!');
}); 

app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
}); 






// import { configDotenv } from 'dotenv';
// import express, { Request, Response } from 'express';
// import { connect, model, Schema } from 'mongoose';

// const mongoose = require("mongoose");

// const PORT = 8000;
// const app = express();

// configDotenv();

// const connectToDB = async () => {
//     const MONGODB_URI = process.env.MONGODB_URI;

//     if(!MONGODB_URI) {
//         throw new Error(
//             "Database Connection URI is not defined in environment variables."
//         );
//     };

//     try{
//         await mongoose.connect(MONGODB_URI);
//         console.log('Succesfully connected to the MongoDB database.');
//     } catch(error){
//         console.error('Failed to connect the MongoDB database:', error);
//         process.exit(1); 
//     }
// }

// connectToDB();

// const FOOD_CATEGORY_SCHEMA = new mongoose.Schema({
//     categoryName: String,
//     id: Number
// });

// const FoodCategoryModel = mongoose.model('FoodCategory', FOOD_CATEGORY_SCHEMA);

// app.use(express.json());

// app.get('/food-category/', async (req: Request, res: Response ) => {
//     const foodCategories = await FoodCategoryModel.find();
//     console.log('Food Categories', foodCategories);
//     res.send('Hello from backend');
// });
// app.get('/food-category/:id', async (req: Request, res: Response ) => {
//     res.send('Hello from backend');
// });
// app.post('/food-category/', async (req: Request, res: Response ) => {
//     res.send('Hello from backend');
// })
// app.delete('/food-category/:id', async (req: Request, res: Response ) => {
//     res.send('Hello from backend');
// });
// app.put('/food-category/:id', async (req: Request, res: Response ) => {
//     res.send('Hello from backend');
// });



// app.listen(PORT, () => {
//     console.log(`Server is Running on http:localhost`)
// }); 
