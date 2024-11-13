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

  const count = await db.get("SELECT COUNT(*) AS count FROM tasks");
  if (count.count === 0) {
    await db.run(`
        INSERT INTO tasks (title, text) 
        VALUES 
          ('Task 1', 'Description of Task 1'),
          ('Task 2', 'Description of Task 2');
      `);
  }

  return db;
};
