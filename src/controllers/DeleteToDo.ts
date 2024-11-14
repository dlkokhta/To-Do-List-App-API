// src/controllers/DeleteToDo.ts
import { Request, Response } from "express";
import { initializeDb } from "../config/database";

const DeleteToDo = async (req: Request, res: Response) => {
  const { id } = req.params; // Extract the task ID from the URL parameter
  const db = await initializeDb();

  try {
    // Perform the delete operation
    const result = await db.run("DELETE FROM tasks WHERE id = ?", [id]);

    // Check if 'result' and 'result.changes' are defined
    // if (!result || result.changes === 0) {
    //   // If no task was deleted, return a 404 error
    //   return res.status(404).json({ message: "Task not found" });
    // }

    // Send a success response if the task was deleted
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Failed to delete task" });
  } finally {
    await db.close();
  }
};

export default DeleteToDo;
