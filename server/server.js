import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { generateJWT } from "./utils/jwt.js";
import { v4 as uuidv4 } from "uuid";
import { allTasks } from "./data/tasks.js";
import { allUsers } from "./data/users.js";

const app = express();
const port = process.env.PORT || 3333;

// ...existing code...
app.use(express.json());
app.use(cors());

// Read (GET) all tasks

app.get("/tasks", (req, res) => {
  return res.json(Array.from(allTasks.values()));
});

// Read (GET) one specific task
app.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  if (allTasks.has(id)) {
    return res.json(allTasks.get(id));
  } else {
    return res.status(404).json({ message: "Task not found" });
  }
});

// Update (PUT) a task (full update)

app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;

  if (allTasks.has(id)) {
    // Replace the entire task with the new data
    allTasks.set(id, { id, ...updatedTask });
    return res.json(allTasks.get(id));
  } else {
    return res.status(404).json({ message: "Task not found" });
  }
});

// Create (POST) a new task

app.post("/tasks", (req, res) => {
  const newTask = {
    id: uuidv4(),
    ...req.body,
  };
  allTasks.set(newTask.id, newTask);
  return res.status(201).json(newTask);
});

// Delete (DELETE) a task

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  if (allTasks.has(id)) {
    allTasks.delete(id);
    return res.status(204).end();
  } else {
    return res.status(404).json({ message: "Task not found" });
  }
});

// Sign up endpoint
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (allUsers.has(email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const salt = bcrypt.genSaltSync(10);
  const bcryptPassword = bcrypt.hashSync(password, salt);

  const user = {
    name,
    email,
    password: bcryptPassword,
  };

  allUsers.set(email, user);

  // generate jwt and return it
  const jwt = generateJWT(user.email);
  return res.status(201).json({ jwt, isAuthenticated: true, user });
});

// Login endpoint
app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const user = allUsers.get(email);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const jwt = generateJWT(user.email);
    return res.status(200).json({ jwt, isAuthenticated: true, user });
  } catch (error) {
    return res.status(400).json({ message: "Invalid request" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
