import express from "express";
import AddToDo from "../controllers/AddToDo";
import GetToDos from "../controllers/GetToDos";

const todoAppRouter = express.Router();

todoAppRouter.post("/addToDo", AddToDo);
todoAppRouter.get("/getToDos", GetToDos);

export default todoAppRouter;
