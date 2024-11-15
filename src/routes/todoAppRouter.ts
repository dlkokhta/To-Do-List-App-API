import express from "express";
import AddToDo from "../controllers/AddToDo.js";
import GetToDos from "../controllers/GetToDos.js";
import DeleteToDo from "../controllers/DeleteToDo.js";
import EditToDo from "../controllers/EditToDo.js";
import CompletedToDo from "../controllers/CompletedToDo.js";
import DeleteAllToDos from "../controllers/DeleteAllToDos.js";
import DeleteCompletedToDos from "../controllers/DeleteCompletedToDos.js";

const todoAppRouter = express.Router();

todoAppRouter.post("/addToDo", AddToDo);
todoAppRouter.get("/getToDos", GetToDos);
todoAppRouter.delete("/deleteToDo/:id", DeleteToDo);
todoAppRouter.put("/editToDo/:id", EditToDo);
todoAppRouter.patch("/completedToDo/:id", CompletedToDo);
todoAppRouter.delete("/deleteAllToDo", DeleteAllToDos);
todoAppRouter.delete("/deleteCompletedToDo", DeleteCompletedToDos);

export default todoAppRouter;
