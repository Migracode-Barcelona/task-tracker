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
  releasedate,
  assignedto,
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
      <div className={`${styles.title}`}>{title}</div>
      <div>
        <div className={`${styles.priority} ${getPriorityClass()}`}>
          {priority}
        </div>
      </div>
      <div className={`${styles.date}`}>
        <SunIcon />
        <div>{releasedate}</div>
      </div>
      <div className={`${styles.assignedTo}`}>
        <PersIcon />
        <div>{assignedto}</div>
      </div>
      <div className={`${styles.project}`}>{projectName}</div>
    </div>
  );
}

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  releasedate: PropTypes.string.isRequired,
  assignedto: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};
