import { Request, Response } from "express";
import { initializeDb } from "../config/database";

const DeleteAllToDos = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const db = await initializeDb();

  try {
    const result = await db.run("DELETE FROM tasks");

    if (result.changes && result.changes > 0) {
      return res
        .status(200)
        .json({ message: "All tasks deleted successfully" });
    } else {
      return res.status(404).json({ message: "No tasks found to delete" });
    }
  } catch (error) {
    console.error("Error deleting tasks:", error);
    return res.status(500).json({ message: "Failed to delete tasks" });
  } finally {
    await db.close();
  }
};

export default DeleteAllToDos;
