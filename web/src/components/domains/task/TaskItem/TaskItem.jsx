import MyIconSunset from './MyIconSunset';
import StudentIcon from './StudentIcon';
import styles from './TaskItem.module.css';
import PropTypes from 'prop-types';

/*
Please create the <TaskItem /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Add the necessary props to the component.
*/

function TaskItem({ ProjectName, Priority, DueDate, Assignee, Project }) {
  function colorBox() {
    if (Priority === 'low') {
      return `${styles.btn} ${styles.btnGreen}`;
    }
    if (Priority === 'medium') {
      return `${styles.btn} ${styles.btnYellow}`;
    }
    if (Priority === 'high') {
      return `${styles.btn} ${styles.btnRed}`;
    }
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <h4>{ProjectName}</h4>
        <div>
          <button className={colorBox()}>{Priority}</button>
        </div>
        <div>
          <p className={styles.dueDate}>
            <span>
              <MyIconSunset />
            </span>
            {DueDate}
          </p>
        </div>

        <p className={styles.assignee}>
          <span>
            <StudentIcon />
          </span>
          {Assignee}
        </p>

        <p className={styles.projectItem}>{Project}</p>
      </div>
    </>
  );
}

TaskItem.propTypes = {
  ProjectName: PropTypes.string.isRequired,
  Priority: PropTypes.oneOf(['low', 'medium', 'high']).isRequired,
  DueDate: PropTypes.string.isRequired,
  Assignee: PropTypes.string.isRequired,
  Project: PropTypes.string.isRequired,
};

export default TaskItem;
