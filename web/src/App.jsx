import { TaskList } from './components/domains/task/TaskList/TaskList';
import { TaskForm } from './components/domains/task/TaskForm/TaskForm';

function App() {
  function createTask() {
    console.log('it works');
  }

  return (
    <>
      <TaskList />
      <TaskForm handleClick={createTask} />
    </>
  );
}

export default App;
