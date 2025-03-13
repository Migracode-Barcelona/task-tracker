import express from "express";
const app = express();
const port = process.env.PORT || 3333;
import { allTasks } from "./data/tasks.js";
import cors from "cors";

// ...existing code...
app.use(express.json());
app.use(cors());

app.get("/tasks", (req, res) => {
  res.json(Array.from(allTasks.values()));
});

app.post("/tasks", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
