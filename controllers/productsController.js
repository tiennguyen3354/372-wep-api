import fs from 'fs/promises'; 
import db from './../db/productsDb.js'

export const getProducts = async (req, res) => {
    // const data = await fs.readFile("./products.json" , "utf-8")
    const products = await db.getProducts(); 
    //convert from json to js ob notation

    
    res.status(200).json({
        message: `Found ${products.length} products in database`, 
        products
    })

}

export const getProductById = async (req, res) => {
    let id = parseInt(req.params.id); 
    
    // const data = await fs.readFile("./products.json", "utf-8")
    

    // database vers

    const result = await db.getProductById(id)

    if (result.length !== 0) { 
        const product = result[0]
        res.status(200).json({
            message: `Returning product with id${id}`, 
            product
        })
    }

    //convert from json to js ob notation

    // const products = JSON.parse(data); 

    // const result = products.filter(prod => prod.id === id);  // this will return an array 
    // const product = result[0]

}

export const addProduct = async (req, res) => {
    const { productName, productDescription, price, inStock } = req.body;
    const result = await db.addProduct(productName, productDescription, price, inStock);

    if (result === null) {
        res.status(400).send({
            message: "Product not saved"
        })  
    } else { 
        //let the user know the data was saved 
        const product = result[0];
        res.status(201).send({
            message: `Product saved with ID: ${product.productId}`,
            product
        })
    } 

}; 

export const updateProduct = (req, res) => {}

export const deleteProduct = (req, res) => {}