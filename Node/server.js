import express from "express";
import mongoose from "mongoose";
import authRoutes from "./Routes/authRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";



const app = new express();

app.listen(4000, ()=>{
    console.log("The server is running on port 4000")
});



async function connectDB (){
  try {
    await mongoose.connect("mongodb://localhost:27017/shoppyglobe"); 
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1); 
  }
};
connectDB();

app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);