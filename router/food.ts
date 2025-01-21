import { Router, Request, Response } from "express";
import { FoodModel } from "../models/food";


export const foodRouter = Router();

foodRouter.get('/', async (req: Request, res: Response) => {
    const items = await FoodModel.find(); 
    res.json(items);
});

foodRouter.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const item = await FoodModel.findById(id);
    res.json(item);
});

foodRouter.post('/', async (req: Request, res: Response) => {
    const {category, foodName, image, price, ingredients } = req.body
    const newItem = await FoodModel.create({category, foodName, image, price, ingredients } );
    res.json({newItem, message:"nemegdlee"});
});

foodRouter.delete('/:id', async (req: Request, res: Response) => {
    const deletedItem = await FoodModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
});

foodRouter.put('/:id', async (req: Request, res: Response) => {
    const updatedItem = await FoodModel.findByIdAndUpdate(
        req.params.id,
        {
        categoryName: req.body.categoryName,
        },
        { new: true }
    );
    res.json(updatedItem);
});