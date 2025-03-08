import express from 'express'
import cors from 'cors'; // added
const app = express();
import {allTasks} from './data/tasks.js';
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors()); // added

app.get('/tasks', (req, res) => {
	res.json(Array.from(allTasks.values()));
});

app.post('/tasks', (req, res) => {
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
