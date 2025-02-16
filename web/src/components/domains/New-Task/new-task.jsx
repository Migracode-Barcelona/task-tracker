import React from 'react';
import { useState } from 'react';
import styles from './new-task.module.css';
import { PropTypes } from 'prop-types';

const NewTaskForm = ({ onHandleNewTask }) => {
  const [textTask, setTextTask] = useState('');
  const [textProject, setTextProject] = useState('');

  const [projectStatus, setProjectStatus] = useState('');

  const [participants, setParticipants] = useState('');

  const [deadline, setDeadline] = useState('');

  const clearFields = () => {
    setTextTask('');
    setTextProject('');
    setProjectStatus('');
    setParticipants('');
    setDeadline('');
  };

  function handleOnClickButton() {
    onHandleNewTask(
      textTask,
      projectStatus,
      deadline,
      participants,
      textProject,
    );
  }

  return (
    <div className={styles.taskBox}>
      <h2 className={styles.titleName}>Add A New Task</h2>

      <div className={styles.eachInputBox}>
        <label htmlFor="taskName">Task Name: </label>
        <input
          type="text"
          value={textTask}
          id="taskName"
          className={styles.taskName}
          onChange={(e) => setTextTask(e.target.value)}
        />
      </div>
      <div className={styles.eachInputBox}>
        <label htmlFor="projectName">Project Name: </label>
        <input
          type="text"
          value={textProject}
          id="projectName"
          className={styles.projectNameInput}
          onChange={(e) => setTextProject(e.target.value)}
        />
      </div>
      <div className={styles.eachInputBox}>
        <label htmlFor="state">Project Status: </label>
        <input
          type="text"
          value={projectStatus}
          id="state"
          className={styles.status}
          onChange={(e) => setProjectStatus(e.target.value)}
        />
      </div>
      <div className={styles.eachInputBox}>
        <label htmlFor="participants">Assign Participants: </label>
        <input
          type="text"
          value={participants}
          id="participants"
          className={styles.participants}
          onChange={(e) => setParticipants(e.target.value)}
        />
      </div>
      <div className={styles.eachInputBox}>
        <label htmlFor="date">Pick Deadline:</label>
        <input
          value={deadline}
          type="date"
          id="date"
          name="date"
          min="2000-01-01"
          max="2030-12-31"
          className={styles.date}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <button
        className={styles.clickButton}
        onClick={() => {
          handleOnClickButton();
          clearFields();
        }}
      >
        Create Task
      </button>
    </div>
  );
};

NewTaskForm.propTypes = {
  textTaskTask: PropTypes.string.isRequired,
  textProject: PropTypes.string.isRequired,
  projectStatus: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  participants: PropTypes.string.isRequired,
  onHandleNewTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
