import mysql from 'mysql2/promise';
import dotenv from 'dotenv'; 

dotenv.config({ 
    path: "./config.env"
})

// read in our env 
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env; 


// connect to the db
const connect = await mysql.createConnection({ 
    host: DB_HOST, 
    port: DB_PORT,
    database: DB_DATABASE, 
    user: DB_USER, 
    password: DB_PASSWORD
})
console.log(`Connected to mysql on ${DB_PORT}`)
// export functions to access the db
async function getProducts() { 
    const [results] = await connect.query("SELECT * FROM products"); 
    return results
    
}

async function getProductById(id) { 
    //query the db for a product with the given id
    const [results] = await connect.query("SELECT * FROM products WHERE productId = ?", [id])  
    return results; //return an array of results 

}

async function addProduct(name, description, price, inStock ) { 
    const [results] = await connect.query("INSERT INTO products (productName, productDescription, price, inStock, createdAt) VALUES (?, ?, ?, ?, NOW()) ",
        [name, description, price, inStock])
    console.log(results)
    if (results.affectedRows === 0) {
        return null; 
    } else {
        return await getProductById(results.insertId);
    }
  
}

function updateProduct() { 

}

function deleteProduct() { 
    
}

export default { getProducts, getProductById, addProduct, updateProduct, deleteProduct}