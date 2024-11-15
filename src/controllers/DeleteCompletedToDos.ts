import { Request, Response } from "express";
import { initializeDb } from "../config/database";

const DeleteCompletedToDos = async (_req: Request, res: Response) => {
  const db = await initializeDb();

  try {
    const result = await db.run("DELETE FROM tasks WHERE completed = 1");

    if (result.changes && result.changes > 0) {
      return res
        .status(200)
        .json({ message: "Completed tasks deleted successfully" });
    } else {
      return res
        .status(404)
        .json({ message: "No completed tasks found to delete" });
    }
  } catch (error) {
    console.error("Error deleting completed tasks:", error);
    return res
      .status(500)
      .json({ message: "Failed to delete completed tasks" });
  } finally {
    await db.close();
  }
};

export default DeleteCompletedToDos;
