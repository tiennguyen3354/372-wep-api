import express from 'express'; 
import { addProduct, getProductById, getProducts, updateProduct, deleteProduct } from '../controllers/productsController.js'; 

// express middleware router 
const productRouter = express.Router(); 

productRouter.post("/products", addProduct); 
productRouter.get("/products", getProducts); 
productRouter.get("/products/:id", getProductById);
productRouter.patch("/products" , updateProduct ); 
productRouter.delete("/products", deleteProduct); 

export default productRouter; 