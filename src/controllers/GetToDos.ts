// src/controllers/getTasks.ts
import { Request, Response } from "express";
import { initializeDb } from "../config/database";

const GetToDos = async (_req: Request, res: Response) => {
  try {
    const db = await initializeDb();
    console.log("Database connection:", db);

    const tasks = await db.all("SELECT * FROM tasks");
    console.log("Fetched tasks:", tasks);

    res.status(200).json({ tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

export default GetToDos;
