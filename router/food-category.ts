import { Router, Request, Response } from "express";
import { FoodCategoryModel } from "../models/food-category";


export const foodCategoryRouter = Router();

foodCategoryRouter.get('/', async (req: Request, res: Response) => {
    const allData = await FoodCategoryModel.find(); 
    res.json(allData);
});

foodCategoryRouter.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const item = await FoodCategoryModel.findById(id);
    res.json(item);
});

foodCategoryRouter.post('/', async (req: Request, res: Response) => {
    const newItem = await FoodCategoryModel.create({
        categoryName: req.body.categoryName,
    });
    res.json({newItem, message:"nemegdlee"});
});

foodCategoryRouter.delete('/:id', async (req: Request, res: Response) => {
    const deletedItem = await FoodCategoryModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
});

foodCategoryRouter.put('/:id', async (req: Request, res: Response) => {
    const updatedItem = await FoodCategoryModel.findByIdAndUpdate(
        req.params.id,
        {
        categoryName: req.body.categoryName,
        },
        { new: true }
    );
    res.json(updatedItem);
});