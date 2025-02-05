import styles from './TaskItem.module.css';
import { PropTypes } from 'prop-types';
/*
Please create the <TaskItem /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Add the necessary props to the component.
*/

function TaskItem(props) {
  const colorState = () => {
    if (props.ProjectStatus === 'Low') {
      return styles.buttonGreen;
    }
    if (props.ProjectStatus === 'Medium') {
      return styles.buttonOrange;
    }
    if (props.ProjectStatus === 'High') {
      return styles.buttonRed;
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h4 className={styles.Task}>{props.ProjectTask}</h4>
        <button className={colorState()}>{props.ProjectStatus}</button>
        <div className={styles.deadlineBox}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/430/430485.png"
            alt="icon for deadlines"
          />
          <p className={styles.taskDate}>{props.date}</p>
        </div>
        <div className={styles.participantBox}>
          <img
            src="https://www.svgrepo.com/show/502898/user-group.svg"
            alt="icon for participants"
          />
          <p className={styles.participants}>{props.participants}</p>
        </div>

        <h4 className={styles.project}>{props.project}</h4>
      </div>
    </div>
  );
}

TaskItem.propTypes = {
  ProjectTask: PropTypes.string.isRequired,
  ProjectStatus: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  participants: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
};

export default TaskItem;
