// src/controllers/AddToDo.ts
import { Request, Response } from "express";
import { initializeDb } from "../config/database";

const AddToDo = async (req: Request, res: Response) => {
  const { title, text } = req.body;

  const db = await initializeDb();

  try {
    const result = await db.run(
      "INSERT INTO tasks (title, text) VALUES (?, ?)",
      [title, text]
    );

    res.status(201).json({
      id: result.lastID,
      title,
      text,
      createdAt: new Date().toISOString(),
      completed: false,
    });
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Failed to add task" });
  } finally {
    await db.close();
  }
};

export default AddToDo;
