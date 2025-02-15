// import TaskItem from './components/domains/task/TaskItem/TaskItem';
import NewTask from './components/domains/task/TaskItem/NewTask';
import TaskList from './components/domains/task/TaskList/TaskList';
import { useState } from 'react';

function App() {
  const [taskInform, setTaskInform] = useState([
    {
      id: 1,
      ProjectName: 'Re-work UI/UX',
      Priority: 'low',
      DueDate: '12/05/2025',
      Assignee: 'Said & Rachel',
      Project: 'Time App',
    },
    {
      id: 2,
      ProjectName: 'Dark mode toggle',
      Priority: 'high',
      DueDate: '09/03/2025',
      Assignee: 'Umair & Precious',
      Project: 'Asa Dark-mode Feature',
    },
    {
      id: 3,
      ProjectName: 'Accessibility check',
      Priority: 'medium',
      DueDate: '15/04/2025',
      Assignee: 'Michel & Ricardo',
      Project: 'Timer App',
    },
    {
      id: 4,
      ProjectName: 'Notification Integration',
      Priority: 'high',
      DueDate: '11/03/2025',
      Assignee: 'Ebetsam & Deborah',
      Project: 'Timer App',
    },
  ]);
  function newTaskList(event, ProjectName, Project, Assignee) {
    event.preventDefault();
    setTaskInform((prevtask) => [
      ...prevtask,
      {
        id: 5,
        ProjectName,
        DueDate: new Date().toLocaleDateString(),
        Project,
        Assignee,
        Priority: 'high',
      },
    ]);
  }
  return (
    <>
      <h1>Task Manager</h1>
      {/* <TaskItem /> */}

      <TaskList tasks={taskInform} />
      <NewTask submit={newTaskList} />
    </>
  );
}

export default App;
