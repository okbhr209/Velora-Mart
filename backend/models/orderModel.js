import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          productId: {
            type: mongoose.ObjectId,
            ref: "Products",
          },
          productName: {
            type: String,
          },
          productSlug: {
            type: String,
          },
          productDesc: {
            type: String,
          },
          productPrice: {
            type: Number,
          },
        },
        quantity: {
          type: Number,
          required: true,
          default: 1, // Default quantity is 1
        },
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "Delivered", "Cancelled"],
    },
  },
  { timestamps: true }
);
export default mongoose.model("Order", orderSchema);
