import { TaskList } from './components/domains/task/TaskList/TaskList';
import NewTask from './components/domains/task/NewTask/NewTask';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  const [tasksItems, setTasksItems] = useState([
    {
      id: 1,
      name: 'Re-work UI/UX',
      priority: 'Low',
      dueDate: '12/05/2025',
      assignees: ['Said, Rachael'],
      project: 'Timer App',
    },
    {
      id: 2,
      name: 'Dark mode toggle',
      priority: 'High',
      dueDate: '09/03/2025',
      assignees: ['Umair, Precious'],
      project: 'ASA Darkmode Feature',
    },
    {
      id: 3,
      name: 'Accessibility checks',
      priority: 'Medium',
      dueDate: '15/04/2025',
      assignees: ['Michel, Ricardo'],
      project: 'Timer App',
    },
    {
      id: 4,
      name: 'Notification integration',
      priority: 'High',
      dueDate: '11/03/2025',
      assignees: ['Ebtesam, Deborah'],
      project: 'Timer App',
    },
  ]);

  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/tasks">Task List</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <NewTask tasksItems={tasksItems} setTasksItems={setTasksItems} />
          }
        />
        <Route path="/tasks" element={<TaskList tasksItems={tasksItems} />} />
      </Routes>
    </>
  );
}
export default App;
