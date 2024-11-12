import express from 'express'; 
import productRouter from './routers/productsRouter.js';
import jokesRouter from './routers/jokesRouter.js';
import cors from 'cors'; 
//destructure our functions 

const app = express(); 

// set up cors 
app.use(cors())
//serve up static files from the public directory
app.use(express.static("./public"));

//configure your web server to parse JSON in a request body 
app.use(express.json()); 


// mount the router! 
app.use("/api/v1", productRouter)
app.use("/api/v1" , jokesRouter)

// listenings 
app.listen(4242, () => console.log(`Server stared on port 4242`)); 