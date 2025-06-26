import { Request, Response, Router } from "express";
import { FoodModel } from "../../models/admin/food";

export const foodRouter = Router();

foodRouter.get('/', async (req: Request, res: Response) => {
  try {
    const foods = await FoodModel.find().populate('category');
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch foods' });
  }
});

foodRouter.post('/', async (req: Request, res: Response) => {
  try {
    const newFood = new FoodModel(req.body);
    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create food' });
  }
});

foodRouter.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedCategory = await FoodModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCategory) {
      res.status(404).json({ message: 'Food not found' });
      return;
    }
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update food' });
  }
});

foodRouter.delete('/:id', (async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedCategory = await FoodModel.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      res.status(404).json({ message: 'food not found' });
      return;
    }
    res.json({ message: 'food deleted successfully', deletedCategory });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete food' });
  }
}) as import('express').RequestHandler);