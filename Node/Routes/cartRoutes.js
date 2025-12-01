import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { addToCart, updateCartItem, deleteCartItem } from "../Controller/cartController.js";

const router = express.Router();

router.use(protect);

router.post("/", addToCart);
router.put("/:id", updateCartItem);
router.delete("/:id", deleteCartItem);


export default router;
