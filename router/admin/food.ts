import { Request, Response, Router } from "express";
import { FoodModel } from "../../models/admin/food";

export const foodRouter = Router();

// GET all foods
foodRouter.get('/', async (req: Request, res: Response) => {
  const foods = await FoodModel.find().populate('category'); // Optional populate
  res.json(foods);
});

// POST create food
foodRouter.post('/', async (req: Request, res: Response) => {
  const newFood = new (req.body);
  const savedFood = await newFood.save();
  res.status(201).json(savedFood);
});
