import styles from './TaskForm.module.css';
import PropTypes from 'prop-types';

export function TaskForm() {
  return (
    <>
      <div className={styles.formWrapper}>
        <form>
          <h1 className={styles.headingStyle}>New Task</h1>
          <fieldset>
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

            {/* Priority */}
            <label htmlFor="taskPriority" className={styles.taskLabelStyle}>
              Priority
              <select
                name="taskPriority"
                className={styles.taskInputStyle}
                required
              >
                <option value>(select one)</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </label>
          </fieldset>
        </form>
      </div>
    </>
  );
}
