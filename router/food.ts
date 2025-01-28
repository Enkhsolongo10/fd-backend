import { Router, Request, Response } from "express";
import { FoodModel } from "../models/food";

export const foodRouter = Router();

foodRouter.get('/', async (req: Request, res: Response) => {
    const categoryId = req.query.categoryId as string;

    if(categoryId) {
        try {
            const categoryFoods = await FoodModel.find({
                category: categoryId, 
            });
            res.json(categoryFoods);
        } catch (error) {
            res.status(500).json({error});
        }
    } else {
        const allFoods = await FoodModel.find();
        res.json(allFoods);
    }
});

foodRouter.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const item = await FoodModel.findById(id);
    res.json(item);
});

foodRouter.post('/', async (req: Request, res: Response) => {
    console.log(req.body)
    const {name, category, image, price, ingredients} = req.body;
    const newFood = await FoodModel.create({
        category, 
        name,
        image,
        price,
        ingredients
    });
    res.json(newFood);
    // try{
    //     const newItem = await FoodModel.create(body);
    //     res.json({newItem, message:"nemegdlee"});
    // }catch(e){
    //     console.error(e, "aldaa")
    // }
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
