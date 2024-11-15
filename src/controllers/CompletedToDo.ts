import { Request, Response } from "express";
import { initializeDb } from "../config/database";

const CompletedToDo = async (req: Request, res: Response) => {
  const { id } = req.params;

  console.log("parammssss", req.params); // Log to check the ID
  const db = await initializeDb();

  try {
    // Ensure ID is an integer
    const taskId = parseInt(id, 10);

    if (isNaN(taskId)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    // Run the update query
    const result: any = await db.run(
      "UPDATE tasks SET completed = 1 WHERE id = ?",
      [taskId]
    );

    // Check if the update affected any rows
    if (result && result.changes > 0) {
      return res.status(200).json({ message: "Task marked as completed" });
    } else {
      return res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error("Error completing task:", error);
    return res.status(500).json({ message: "Failed to complete task" });
  } finally {
    await db.close();
  }
};

export default CompletedToDo;
