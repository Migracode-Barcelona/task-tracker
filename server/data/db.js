// db.js
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "anitaafere",
  host: "localhost",
  database: "task_trackerdb",
  password: "",
  port: 5432,
});

export default pool;
