import styles from './TaskItem.module.css';
import PropTypes from 'prop-types';

export function TaskItem({
  name,
  priority,
  releaseDate,
  designers,
  projectName,
}) {
  return (
    <li className={styles.taskItem}>
      <h3>{name}</h3>
      <p className="section">
        <strong>Priority:</strong> {priority}
      </p>
      <p className="section">
        <strong>Release Date:</strong> {releaseDate}
      </p>
      <p className="section">
        <strong>Designers:</strong> {designers.join(', ')}
      </p>
      <p className="section">
        <strong>Project:</strong> {projectName}
      </p>
    </li>
  );
}

TaskItem.propTypes = {
  name: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  designers: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectName: PropTypes.string.isRequired,
};
