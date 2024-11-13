import { Request, Response } from "express";

// Fake in-memory database for todos (for simplicity, you can replace this with a real database later)
let todos: { id: number; title: string; text: string; createdAt: string }[] =
  [];
let nextId = 1;

// Controller to add a new Todo
const addTodo = (req: Request, res: Response) => {
  const { title, text } = req.body;

  // Validate the input
  if (!title || !text) {
    return res.status(400).json({ error: "Title and text are required." });
  }

  // Create a new todo item
  const newTodo = {
    id: nextId++,
    title,
    text,
    createdAt: new Date().toISOString(),
  };

  // Push the new todo to the "database"
  todos.push(newTodo);

  // Respond with the new todo data
  return res.status(201).json({
    message: "Todo created successfully",
    todo: newTodo,
  });
};

export default addTodo;

// Optional: Add more controller methods (e.g., to get all todos, delete a todo, etc.)
