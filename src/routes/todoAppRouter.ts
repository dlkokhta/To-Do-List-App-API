import express from "express";
const todoAppRouter = express.Router();
import AddTodo from "../controllers/AddToDo.js";

todoAppRouter.post("/addToDo", AddTodo);

export default todoAppRouter;
