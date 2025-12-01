import Product from "../Model/Product.js";

// Get all products
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

// Get product by ID
export async function getProductById (req, res, next){
  try{
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (err) {
    next(err);
  }
};
