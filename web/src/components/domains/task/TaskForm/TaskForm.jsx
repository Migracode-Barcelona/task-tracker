import styles from './TaskForm.module.css';
import { PropTypes } from 'prop-types';

function TaskForm(props) {
  return (
    <form className={styles.formWrapper}>
      <h1 className={styles.headingStyle}>New Task</h1>
      <fieldset className={styles.fieldsetStyle}>
        {/* Task title */}
        <label htmlFor="taskTitle" className={styles.taskLabelStyle}>
          Title
          <input
            type="text"
            name="taskTitle"
            className={styles.taskInputStyle}
            required
          />
        </label>

        {/* Project name */}
        <label htmlFor="taskProject" className={styles.taskLabelStyle}>
          Project
          <input
            type="text"
            name="taskProject"
            className={styles.taskInputStyle}
            required
          />
        </label>

        {/* 
        <label htmlFor="taskPriority" className={styles.taskLabelStyle}>
          Priority
          <fieldset className={styles.radios}>
            <label htmlFor="low">
              <input type="radio" name="low" id="lowPriority" />
              {' Low'}
            </label>
            <label htmlFor="medium">
              <input type="radio" name="medium" id="mediumPriority" />
              {' Medium'}
            </label>
            <label htmlFor="high">
              <input type="radio" name="high" id="highPriority" />
              {' High'}
            </label>
          </fieldset>
        </label> */}
      </fieldset>
      <input
        type="button"
        value="Add task"
        className={styles.formButton}
        onClick={props.handleClick}
      />
    </form>
  );
}

export { TaskForm };

TaskForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
