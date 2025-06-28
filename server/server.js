import express from "express";
const app = express();
const port = process.env.PORT || 3333;
import pool from "./data/db.js";
import cors from "cors";
import bcrypt from "bcrypt";
import { generateJWT } from "./utils/generateToken.js";

// ...existing code...
app.use(express.json());
app.use(cors());

// Read (GET) all tasks
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

app.get("/tasks", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks");
    return res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
});

//Get post by ID

app.get("/tasks/:id", authenticate, async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching task by ID:", error.message);
    return res.status(500).json({ error: error.message });
  }
});

// Update (PUT) a task (full update)

app.put("/tasks/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  const { title, priority, releaseDate, assignedTo, projectName } = req.body;

  try {
    const taskCheck = await pool.query("SELECT * FROM tasks WHERE id = $1", [
      id,
    ]);
    const task = taskCheck.rows[0];

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.owner !== req.user.email) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const updated = await pool.query(
      `UPDATE tasks 
       SET title = $1, priority = $2, releaseDate = $3, assignedTo = $4, projectName = $5
       WHERE id = $6 RETURNING *`,
      [title, priority, releaseDate, assignedTo, projectName, id]
    );

    return res.json(updated.rows[0]);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
});

// Create (POST) a new task

app.post("/tasks", authenticate, async (req, res) => {
  const { title, priority, releaseDate, assignedTo, projectName } = req.body;

  try {
    const ownerId = req.user.id;

    const result = await pool.query(
      `INSERT INTO tasks (title, priority, releaseDate, assignedTo, projectName,owner_id)
       VALUES ($1, $2, $3, $4, $5,$6) RETURNING *`,
      [title, priority, releaseDate, assignedTo, projectName, ownerId]
    );

    return res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
});

// Delete (DELETE) a task

app.delete("/tasks/:id", authenticate, async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(204).end();
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
});

// Sign-Up endpoint

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists by querying the database
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const bcryptPassword = bcrypt.hashSync(password, salt);

    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, bcryptPassword]
    );

    // Get the user details (id, name, email)
    const user = newUser.rows[0];

    // generate jwt and return it
    const jwt = generateJWT(user.id);
    return res.status(201).json({
      message: "Signup successful",
      jwt,
      isAuthenticated: true,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists in the database
    const result = await pool.query(
      "SELECT id, name, email, password FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "User doesnt exist in Database" });
    }

    const user = result.rows[0];

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const jwt = generateJWT(user.id);
    return res.status(200).json({
      jwt,
      isAuthenticated: true,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    return res.status(400).json({ message: "Invalid request" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

fetch("http://localhost:3333/tasks")
  .then((response) => response.json())
  .then((data) => console.log(data));
