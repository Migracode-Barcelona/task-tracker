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
          priority={task.priority}
          dueDate={task.dueDate}
          assignee={task.assignee}
          project={task.project}
          photos={task.photos}
          studentPhotos={task.studentPhotos}
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
      priority: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      assignee: PropTypes.string.isRequired,
      project: PropTypes.string.isRequired,
      photos: PropTypes.arrayOf(PropTypes.string).isRequired,
      studentPhotos: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default TaskList;
