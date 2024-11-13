import express from "express";
import AddToDo from "../controllers/AddToDo";

const todoAppRouter = express.Router();

todoAppRouter.post("/addToDo", AddToDo);

export default todoAppRouter;
