import NewTask from '../components/domains/task/NewTask/NewTask';
/* import { TaskItem } from '../components/domains/task/TaskItem/TaskItem'; */

function NewTaskPage({ tasksItems, setTasksItems }) {
  return (
    <>
      <NewTask tasksItems={tasksItems} setTasksItems={setTasksItems} />
    </>
  );
}

export default NewTaskPage;
