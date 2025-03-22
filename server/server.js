import express from "express";
const app = express();
const port = process.env.PORT || 3333;
import { allTasks } from "./data/tasks.js";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { allUsers } from "./data/users.js";
import { generateJWT } from "./utils/generateJWT.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    res
      .status(401)
      .send({ message: "Token is not valid", isAuthenticated: false });
  }
}

// Read (GET) all tasks

app.get("/tasks", (req, res) => {
  res.json(Array.from(allTasks.values()));
});

// Update (PUT) a task (full update)

app.put("/tasks/:id", authenticate, (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;

  if (allTasks.has(id)) {
    // Replace the entire task with the new data
    allTasks.set(id, { id, ...updatedTask });
    res.json(allTasks.get(id));
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// Create (POST) a new task

app.post("/tasks", (req, res) => {
  const newTask = {
    id: uuidv4(),
    ...req.body,
  };
  allTasks.set(newTask.id, newTask);
  res.status(201).json(newTask);
});

// Delete (DELETE) a task

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  if (allTasks.has(id)) {
    allTasks.delete(id);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

//Signup endpoint
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  try {
    //Check if user already exists
    if (allUsers.has(email)) {
      res.status(400).json({ error: "User already exists" });
    }

    //Encrypt password before storing it in db
    const salt = bcrypt.genSalt(10);
    const bcryptPassword = bcrypt.hash(password, salt);

    const newUser = {
      name: name,
      email: email,
      salt: salt,
      password: bcryptPassword,
    };

    allUsers.set(email, newUser);

    //Generate JWT token and return it
    const jwtToken = generateJWT(newUser.email);
    return res.status(201).json({ token: jwtToken, isAuthenticated: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    //Check if user exists
    const user = allUsers.get(email);
    if (!user) {
      return res
        .status(401)
        .json({ error: "Invalid user", isAuthenticated: false });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res
        .status(401)
        .json({ error: "Invalid password", isAuthenticated: false });
    }
    const jwtToken = generateJWT(user.email);

    res.status(200).json({ token: jwtToken, isAuthenticated: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

fetch("http://localhost:3333/tasks")
  .then((response) => response.json())
  .then((data) => console.log(data));
