import SunsetIcon from '../../../Icons/sunsetIcon';
import styles from './TaskItem.module.css';
import { PropTypes } from 'prop-types';
import ParticipantIcon from '../../../Icons/participantIcon';

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
    <div className={styles.container}>
      <h4 className={styles.Task}>{props.ProjectTask}</h4>
      <span className={colorState()}>{props.ProjectStatus}</span>
      <div className={styles.deadlineBox}>
        <SunsetIcon className={styles.SunsetIcon}></SunsetIcon>
        <p className={styles.taskDate}>{props.date}</p>
      </div>
      <div className={styles.participantBox}>
        <ParticipantIcon className={styles.ParticipantIcon}></ParticipantIcon>
        <p className={styles.participants}>{props.participants}</p>
      </div>

      <h4 className={styles.project}>{props.project}</h4>
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
