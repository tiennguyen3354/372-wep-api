import express from "express";
import { getJokes } from "../controllers/jokesController.js";

const jokesRouter = express.Router(); 


jokesRouter.get("/jokes", getJokes);

export default jokesRouter; 

