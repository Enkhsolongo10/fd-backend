import { configDotenv } from 'dotenv';
import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';

const PORT = 8000;
const app = express();

configDotenv();
const URI = process.env.MONGODB_URI;
console.log(URI);

// 1. Connect to Mongo DB

function connectToBD(){

}

app.use(express.json());

app.get('/', async (req: Request, res: Response ) => {
    res.send('Hello from backend');
});

app.listen(PORT, () => {
    console.log(`Server is Running on http:localhost`)
}); 

const connectMongoDB = () => {

}