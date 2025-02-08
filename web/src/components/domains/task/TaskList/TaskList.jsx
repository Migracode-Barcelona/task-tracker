import { useState } from 'react';
import styles from './TaskList.module.css';
import PropTypes from 'prop-types';
import { TaskItem } from '../TaskItem/TaskItem';

export function TaskList({ initialTaskItems }) {
  const [taskItems, setTaskItems] = useState(initialTaskItems);
  const [newTask, setNewTask] = useState({
    name: '',
    priority: '',
    releaseDate: '',
    designers: '',
    projectName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = () => {
    setTaskItems([
      ...taskItems,
      {
        ...newTask,
        designers: newTask.designers
          .split(',')
          .map((designer) => designer.trim()),
      },
    ]);
    setNewTask({
      name: '',
      priority: '',
      releaseDate: '',
      designers: '',
      projectName: '',
    });
  };

  return (
    <div className={styles.listWrapper}>
      <ul>
        {taskItems.map((task, index) => (
          <TaskItem
            key={index}
            name={task.name}
            priority={task.priority}
            releaseDate={task.releaseDate}
            designers={task.designers}
            projectName={task.projectName}
          />
        ))}
      </ul>
      <div className={styles.newTaskForm}>
        <input
          type="text"
          name="name"
          placeholder="Task Name"
          value={newTask.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="priority"
          placeholder="Priority"
          value={newTask.priority}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="releaseDate"
          placeholder="Release Date"
          value={newTask.releaseDate}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="designers"
          placeholder="Designers (comma separated)"
          value={newTask.designers}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="projectName"
          placeholder="Project Name"
          value={newTask.projectName}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  initialTaskItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      designers: PropTypes.arrayOf(PropTypes.string).isRequired,
      projectName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
