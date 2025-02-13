import styles from './TaskItem.module.css';
import PropTypes from 'prop-types';
import SunIcon from './SunIcon';
import PersIcon from './PersIcon';
/*
Please create the <TaskItem /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Add the necessary props to the component.
*/

// assigning styling for priorities
export function TaskItem({
  title,
  priority,
  releaseDate,
  assignedTo,
  projectName,
}) {
  const getPriorityClass = () => {
    if (priority === 'Low') return `${styles.lowPriority}`;
    if (priority === 'Medium') return `${styles.mediumPriority}`;
    if (priority === 'High') return `${styles.highPriority}`;
    return '';
  };

  return (
    <div className={styles.itemWrapper}>
      <div className={`${styles.titleStyle}`}>{title}</div>
      <div>
        <div className={`${styles.priorityStyle} ${getPriorityClass()}`}>
          {priority}
        </div>
      </div>
      <div className={`${styles.dateStyle}`}>
        <SunIcon />
        <div>{releaseDate}</div>
      </div>
      <div className={`${styles.assignedToStyle}`}>
        <PersIcon />
        <div>{assignedTo}</div>
      </div>
      <div className={`${styles.projectStyle}`}>{projectName}</div>
    </div>
  );
}

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  assignedTo: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};
