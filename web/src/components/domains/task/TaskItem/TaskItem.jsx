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
  realiseDate,
  designers,
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
        <div>{realiseDate}</div>
      </div>
      <div className={`${styles.designersStyle}`}>
        <PersIcon />
        <div>{designers}</div>
      </div>
      <div className={`${styles.projectStyle}`}>{projectName}</div>
    </div>
  );
}

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  realiseDate: PropTypes.string.isRequired,
  designers: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};
