import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const initializeDb = async () => {
  const db = await open({
    filename: "./todo.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      text TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  return db;
};
