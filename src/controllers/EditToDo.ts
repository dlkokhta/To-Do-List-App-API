import { Request, Response } from "express";
import { initializeDb } from "../config/database";

const EditToDo = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { title, text } = req.body;

  const db = await initializeDb();

  try {
    const result = await db.run(
      "UPDATE tasks SET title = ?, text = ? WHERE id = ?",
      [title, text, id]
    );

    if (result?.changes && result.changes > 0) {
      return res.status(200).json({ message: "Task updated successfully" });
    } else {
      return res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ message: "Failed to update task" });
  } finally {
    await db.close();
  }
};

export default EditToDo;
