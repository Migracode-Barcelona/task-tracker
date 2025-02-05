import styles from './TaskItem.module.css';
import PropTypes from 'prop-types';

/*
Please create the <TaskItem /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Add the necessary props to the component.
*/

function TaskItem(props) {
  function colorBox() {
    if (props.priority === 'low') {
      return styles.btnGreen;
    }
    if (props.priority === 'medium') {
      return styles.btnYellow;
    }
    if (props.priority === 'high') {
      return styles.btnRed;
    }
  }
  return (
    <div className={styles.mainContainer}>
      <h4>{props.ProjectName}</h4>
      <button className={colorBox()}>{props.priority}</button>
      <p className={styles.dueDate}>
        <span>
          {props.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt="Photo"
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
          ))}
        </span>
        {props.dueDate}
      </p>

      <p className={styles.assignee}>
        <span>
          {props.studentPhotos.map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt="Photo"
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
          ))}
        </span>
        {props.assignee}
      </p>
      <p className={styles.projectItem}>{props.project}</p>
    </div>
  );
}

TaskItem.propTypes = {
  ProjectName: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['low', 'medium', 'high']).isRequired,
  dueDate: PropTypes.string.isRequired,
  assignee: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  studentPhotos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TaskItem;
