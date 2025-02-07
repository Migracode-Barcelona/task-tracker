import MyIconSunset from './MyIconSunset';
import StudentIcon from './StudentIcon';
import styles from './TaskItem.module.css';
import PropTypes from 'prop-types';

/*
Please create the <TaskItem /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Add the necessary props to the component.
*/

function TaskItem({ ProjectName, priority, dueDate, assignee, project }) {
  function colorBox() {
    if (priority === 'low') {
      return styles.btnGreen;
    }
    if (priority === 'medium') {
      return styles.btnYellow;
    }
    if (priority === 'high') {
      return styles.btnRed;
    }
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <h4>{ProjectName}</h4>
        <div>
          <button className={colorBox()}>{priority}</button>
          <p className={styles.dueDate}>
            <span>
              {MyIconSunset().map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt="Photo"
                  style={{ width: '20px', height: '20px', marginRight: '5px' }}
                />
              ))}
            </span>
            {dueDate}
          </p>
        </div>

        <p className={styles.assignee}>
          <span>
            {StudentIcon().map((pic, index) => (
              <img
                key={index}
                src={pic}
                alt="Photo"
                style={{ width: '20px', height: '20px', marginRight: '5px' }}
              />
            ))}
          </span>
          {assignee}
        </p>
        <p className={styles.projectItem}>{project}</p>
      </div>
    </>
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
