import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateJWT } from "./utils/jwt.js";
import { v4 as uuidv4 } from "uuid";
import { allTasks } from "./data/tasks.js";
import { allUsers } from "./data/users.js";

const app = express();
const port = process.env.PORT || 3333;

// ...existing code...
app.use(express.json());
app.use(cors());

function authenticate(req, res, next) {
  console.log("middleware starts here");
  // Get token from request headers
  let token = req.header("authorization");

  // Check if token exists
  if (!token) {
    return res
      .status(403)
      .send({ message: "authorization denied", isAuthenticated: false });
  }

  console.log(token);
  token = token.split(" ")[1];

  // Verify token using jwt
  try {
    /* this will return the user id (user:{id: user_id}) which we 
    provided as payload while generating JWT token */
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user;

    console.log("middleware continues here");
    next();
    console.log("middleware ends here");
  } catch (err) {
    return res
      .status(401)
      .send({ message: "Token is not valid", isAuthenticated: false });
  }
}

// Read (GET) all tasks
app.get("/tasks", authenticate, (req, res) => {
  // Filter tasks by owner
  const tasksFromUser = Array.from(allTasks.values()).filter((task) => {
    return task.owner === req.user.email;
  });
  return res.json(tasksFromUser);
});

// Read (GET) one specific task
app.get("/tasks/:id", authenticate, (req, res) => {
  const { id } = req.params;
  if (allTasks.has(id)) {
    const task = allTasks.get(id);
    if (task.owner !== req.user.email) {
      return res.status(403).json({ message: "Go away!" });
    }
    return res.json(allTasks.get(id));
  } else {
    return res.status(404).json({ message: "Task not found" });
  }
});

// Update (PUT) a task (full update)

app.put("/tasks/:id", authenticate, (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;

  const task = allTasks.get(id);
  if (task) {
    const owner = task.owner;
    if (owner !== req.user.email) {
      return res.status(403).json({ message: "Go away!" });
    }

    allTasks.set(id, { id, ...updatedTask });
    return res.json(allTasks.get(id));
  } else {
    return res.status(404).json({ message: "Task not found" });
  }
});

// Create (POST) a new task

app.post("/tasks", authenticate, (req, res) => {
  const newTask = {
    id: uuidv4(),
    owner: req.user.email,
    ...req.body,
  };
  allTasks.set(newTask.id, newTask);
  return res.status(201).json(newTask);
});

// Delete (DELETE) a task

app.delete("/tasks/:id", authenticate, (req, res) => {
  const { id } = req.params;
  const task = allTasks.get(id);
  if (task) {
    const owner = task.owner;
    if (owner !== req.user.email) {
      return res.status(403).json({ message: "Go away!" });
    }

    allTasks.delete(id);
    return res.status(204).end();
  } else {
    return res.status(404).json({ message: "Task not found" });
  }
});

// Sign up endpoint
app.post("/signup", (req, res) => {
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
