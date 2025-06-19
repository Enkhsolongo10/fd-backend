import { Router, Request, Response } from 'express';
import { FoodCategoryModel } from '../../models/admin/foodCategory';

export const foodCategoryRouter = Router();

// GET all categories
foodCategoryRouter.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await FoodCategoryModel.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
});

// POST new category
foodCategoryRouter.post('/', async (req: Request, res: Response) => {
  try {
    const newCategory = new FoodCategoryModel(req.body);
    const saved = await newCategory.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create category' });
  }
});
