import express from "express";
import AddToDo from "../controllers/AddToDo";
import GetToDo from "../controllers/GetToDo";

const todoAppRouter = express.Router();

todoAppRouter.post("/addToDo", AddToDo);
todoAppRouter.get("/getToDo", GetToDo);

export default todoAppRouter;
