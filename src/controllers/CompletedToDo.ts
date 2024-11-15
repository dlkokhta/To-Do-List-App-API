import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { initializeDb } from "../config/database";

const CompletedToDo = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    console.log("parammssss", req.params);
    const db = await initializeDb();

    try {
      const result = await db.run(
        "UPDATE tasks SET completed = 1 WHERE id = ?",
        [id]
      );

      if (result?.changes && result.changes > 0) {
        res.status(200).json({ message: "Task marked as completed" });
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      console.error("Error completing task:", error);
      res.status(500).json({ message: "Failed to complete task" });
    } finally {
      await db.close();
    }
  }
);

export default CompletedToDo;
