import mongoose, { Schema } from 'mongoose';

const foodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FoodCategory', // reference to another collection
      required: true
    },
    image: { type: String },
    status: { type: String, default: 'available' }
  },
  { timestamps: true }
);

// Export the model
export const FoodModel = mongoose.model('Food', foodSchema);