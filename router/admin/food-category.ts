import { Router, Request, Response } from "express";
import { FoodCategoryModel } from "../../models/admin/foodCategory";

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/", async (res: Response) => {
  try {
    const categories = await FoodCategoryModel.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

foodCategoryRouter.post("/", async (req, res) => {
  try {
    const newCategory = new FoodCategoryModel(req.body);
    console.log("Request body:", req.body);
    const saved = await newCategory.save();
    console.log("Saved category:", saved);
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ message: "Failed to create category" });
  }
});

foodCategoryRouter.delete("/:id", (async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedCategory = await FoodCategoryModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedCategory) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.json({ message: "Category deleted successfully", deletedCategory });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete category" });
  }
}) as import("express").RequestHandler);

// foodCategoryRouter.put('/:id', async (req: Request, res: Response): Promise<void> => {
//   try {
//     const updatedCategory = await FoodCategoryModel.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     if (!updatedCategory) {
//       res.status(404).json({ message: 'Category not found' });
//       return;
//     }
//     res.json(updatedCategory);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to update category' });
//   }
// });