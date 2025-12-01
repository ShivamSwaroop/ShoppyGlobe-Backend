import CartItem from "../Model/CartItem.js";
import Product from "../Model/Product.js";

// Add item to cart
export async function addToCart (req, res, next) {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let item = await CartItem.findOne({
      user: req.user.id,
      product: productId
    });

    if (item) {
      item.quantity += (quantity || 1);
      await item.save();
    } else {
      item = await CartItem.create({
        user: req.user.id,
        product: productId,
        quantity: quantity || 1
      });
    }

    res.status(201).json({ message: "Added to cart", item });
  } catch (err) {
    next(err);
  }
};

// Update cart quantity
export async function updateCartItem  (req, res, next)  {
  try {
    const { quantity } = req.body;

    const item = await CartItem.findById(req.params.id);

    if (!item) return res.status(404).json({ message: "Cart item not found" });

   
    if (item.user.toString() !== req.user.id)
      return res.status(403).json({ message: "Not allowed" });


    item.quantity = quantity;
    await item.save();

    res.json({ message: "Cart updated", item });
  } catch (err) {
    next(err);
  }
};

// Delete from cart
export async function deleteCartItem (req, res, next) {
  try {
    const item = await CartItem.findById(req.params.id);

    if (!item) return res.status(404).json({ message: "Item not found" });

    
    if (item.user.toString() !== req.user.id)
      return res.status(403).json({ message: "Not allowed" });

    await CartItem.deleteOne({ _id: item._id });
    res.json({ message: "Item removed" });
  } catch (err) {
    next(err);
  }
};


