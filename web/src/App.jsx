import { useState } from 'react';
import { TaskList } from './components/domains/task/TaskList/TaskList';
import { TaskForm } from './components/domains/task/TaskForm/TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Re-work UI/UX',
      priority: 'Low',
      realiseDate: '12/05/2025',
      designers: 'Said, Rachael',
      projectName: 'Time App',
    },
    {
      title: 'Dark mode toggle',
      priority: 'High',
      realiseDate: '09/03/2025',
      designers: 'Umair, Precious',
      projectName: 'ASA Darkmode Feature',
    },
    {
      title: 'Accessibility checks',
      priority: 'Medium',
      realiseDate: '15/04/2025',
      designers: 'Michael, Ricardo',
      projectName: 'Time App',
    },
    {
      title: 'Notification integration',
      priority: 'High',
      realiseDate: '11/03/2025',
      designers: 'Ebtesam, Deborah',
      projectName: 'Time App',
    },
  ]);

  function createTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <TaskList taskItems={tasks} />
      <TaskForm handleClick={createTask} />
    </>
  );
}

export default App;
