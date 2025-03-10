import express from 'express'
const app = express();
import cors from 'cors';
import {allTasks} from './data/tasks.js';
const port = process.env.PORT || 3333;

// ...existing code...
app.use(express.json());
app.use(cors());

app.get('/tasks', (req, res) => {
	res.json(Array.from(allTasks.values()));
});

app.post('/tasks', (req, res) => {
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
