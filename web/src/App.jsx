import { useState } from 'react';
import TaskList from './components/domains/task/TaskList/TaskList';
import NewTaskForm from './components/domains/task/NewTask/NewTask.jsx';

function App() {
  const [TaskListInfo, setTaskListInfo] = useState([
    {
      id: 'T1',
      ProjectTask: 'Rework UI/UX',
      ProjectStatus: 'Low',
      date: '12/05/2025',
      participants: ['Said', ' Rachel'],
      project: 'Timer App',
    },
    {
      id: 'T2',
      ProjectTask: 'Dark Mode Toggle',
      ProjectStatus: 'High',
      date: '09/03/2025',
      participants: ['Umair', ' Precious'],
      project: 'ASA DarkMode Feature',
    },
    {
      id: 'T3',
      ProjectTask: 'Accessibility Checks',
      ProjectStatus: 'Medium',
      date: '15/04/2025',
      participants: ['Micheal', ' Ricardo'],
      project: 'Timer App',
    },
    {
      id: 'T4',
      ProjectTask: 'Notification Integration',
      ProjectStatus: 'High',
      date: '11/03/2025',
      participants: ['Ebetsam', ' Deborah'],
      project: 'Timer App',
    },
  ]);

  const newTask = (
    taskName,
    ProjectStatus,
    deadline,
    participants,
    projectName,
  ) => {
    setTaskListInfo((prevTaskInfo) => [
      ...prevTaskInfo,
      {
        id: `T${prevTaskInfo.length + 1}`,
        ProjectTask: taskName,
        ProjectStatus: ProjectStatus.toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        date: deadline,
        participants: participants.split(','),
        project: projectName,
      },
    ]);
  };

  return (
    <>
      <TaskList TaskListInfo={TaskListInfo}></TaskList>

      <NewTaskForm onHandleNewTask={newTask}></NewTaskForm>
    </>
  );
}

export default App;
