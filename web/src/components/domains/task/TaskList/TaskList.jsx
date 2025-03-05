import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';
import PropTypes from 'prop-types';
function TaskList({ tasks }) {
  return (
    <div className={styles.listWrapper}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          ProjectName={task.ProjectName}
          Priority={task.Priority}
          DueDate={task.DueDate}
          Assignee={task.Assignee}
          Project={task.Project}
        />
      ))}
    </div>
  );
}

// PropTypes validation
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ProjectName: PropTypes.string.isRequired,
      Priority: PropTypes.string.isRequired,
      DueDate: PropTypes.string.isRequired,
      Assignee: PropTypes.string.isRequired,
      Project: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TaskList;
