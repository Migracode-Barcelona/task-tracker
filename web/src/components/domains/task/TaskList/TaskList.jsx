import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';
import PropTypes from 'prop-types';

/*
Please create the <TaskList /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Create a taskItems array and return a list of <TaskItem /> components.
*/

function TaskList(props) {
  // create some task items here and return one task list for each item you have

  return (
    <div className={styles.listWrapper}>
      {props.tasks.map((task) => (
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
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.PropTypes.number.isRequired,
      ProjectName: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      assignee: PropTypes.string.isRequired,
      project: PropTypes.string.isRequired,
      photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};
export default TaskList;
