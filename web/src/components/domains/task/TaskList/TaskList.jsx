import styles from './TaskList.module.css';
import PropTypes from 'prop-types';
import { TaskItem } from '../TaskItem/TaskItem'; // Import TaskItem component

export function TaskList({ taskItems }) {
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
    </div>
  );
}

TaskList.propTypes = {
  taskItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      designers: PropTypes.arrayOf(PropTypes.string).isRequired,
      projectName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
