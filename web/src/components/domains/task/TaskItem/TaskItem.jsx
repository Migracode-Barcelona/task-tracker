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
      <h3 className="section">{name}</h3>
      <p className="section">{priority}</p>
      <p className="section">{releaseDate}</p>
      <p className="section">{designers.join(', ')}</p>
      <p className="section">
        <strong>{projectName}</strong>
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
