import express from "express";
import AddToDo from "../controllers/AddToDo";
import GetToDos from "../controllers/GetToDos";
import DeleteToDo from "../controllers/DeleteToDo";
import EditToDo from "../controllers/EditToDo";

const todoAppRouter = express.Router();

todoAppRouter.post("/addToDo", AddToDo);
todoAppRouter.get("/getToDos", GetToDos);
todoAppRouter.delete("/deleteToDo/:id", DeleteToDo);
todoAppRouter.put("/editToDo/:id", EditToDo);

export default todoAppRouter;
