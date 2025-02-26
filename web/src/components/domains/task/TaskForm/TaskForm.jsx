import { useState } from 'react';
import styles from './TaskForm.module.css';
import { PropTypes } from 'prop-types';

function TaskForm({ handleClick }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskProject, setTaskProject] = useState('');

  function submitTask() {
    if (!taskTitle.trim() || !taskProject.trim()) {
      alert('Please enter both title and project name.');
      return;
    }

    const newTask = {
      title: taskTitle,
      priority: 'Medium',
      releaseDate: new Date().toLocaleDateString(),
      assignedTo: 'Unassigned',
      projectName: taskProject,
    };

    handleClick(newTask);
    setTaskTitle('');
    setTaskProject('');
  }

  return (
    <form className={styles.formWrapper}>
      <h1 className={styles.headingStyle}>New Task</h1>
      <fieldset className={styles.fieldsetStyle}>
        {/* Task title */}
        <label htmlFor="taskTitle" className={styles.taskLabelStyle}>
          Title
          <input
            type="text"
            id="taskTitle"
            className={styles.taskInputStyle}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
          />
        </label>

        {/* Project name */}
        <label htmlFor="taskProject" className={styles.taskLabelStyle}>
          Project
          <input
            type="text"
            id="taskProject"
            className={styles.taskInputStyle}
            value={taskProject}
            onChange={(e) => setTaskProject(e.target.value)}
            required
          />
        </label>
      </fieldset>
      <input
        type="button"
        value="Add task"
        className={styles.formButton}
        onClick={submitTask}
      />
    </form>
  );
}

export { TaskForm };

TaskForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
