import styles from './NewTask.module.css';
import { useState } from 'react';

function NewTask({ tasksItems, setTasksItems }) {
  const [taskNameState, setNewTask] = useState('');
  const [taskDescriptionState, setNewTaskDescription] = useState('');

  const storeNewTask = () => {
    const newTask = {
      id: tasksItems.length + 1,
      name: taskNameState,
      description: taskDescriptionState,
    };

    setTasksItems([...tasksItems, newTask]);
    setNewTask('');
    setNewTaskDescription('');
  };

  return (
    <form className={styles.newTask}>
      <label htmlFor="taskName">Task name:</label>
      <input
        className={styles.inputField}
        id="taskName"
        type="text"
        value={taskNameState}
        onChange={(event) => setNewTask(event.target.value)}
        name="username"
        required
      />
      <label htmlFor="taskDescription">Task Description:</label>
      <input
        className={styles.inputField}
        id="taskDescription"
        type="text"
        value={taskDescriptionState}
        onChange={(event) => setNewTaskDescription(event.target.value)}
        name="username"
        required
      />
      <button
        className={styles.newTaskButton}
        type="button"
        onClick={storeNewTask}
      >
        Add Task
      </button>
    </form>
  );
}

export default NewTask;
