import styles from './TaskItem.module.css';
import PropTypes from 'prop-types';
import SunIcon from './SunIcon';
import PersIcon from './PersIcon';

export function TaskItem({
  title,
  priority,
  releaseDate,
  assignedTo,
  projectName,
}) {
  const getPriorityClass = () => {
    return styles[`${priority.toLowerCase()}Priority`];
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
        <div>{releaseDate}</div>
      </div>
      <div className={`${styles.assignedTo}`}>
        <PersIcon />
        <div>{assignedTo}</div>
      </div>
      <div className={`${styles.project}`}>{projectName || 'No Project'}</div>
    </div>
  );
}

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  assignedTo: PropTypes.string.isRequired,
  projectName: PropTypes.string,
};
