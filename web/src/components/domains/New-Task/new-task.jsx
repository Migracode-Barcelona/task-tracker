import React from 'react';
import { useState } from 'react';

const NewTaskForm = (handleButton) => {
  const [textTask, setTextTask] = useState('');
  const [textProject, setTextProject] = useState('');

  const [ProjectState, setProjectState] = useState('');

  const [participants, setParticipants] = useState('');

  const [deadline, setDeadline] = useState('');

  return (
    <div className="taskBox">
      <div>
        <label htmlFor="taskName">Task Name: </label>
        <input
          type="text"
          value={textTask}
          id="taskName"
          className="firstInput"
          onChange={(e) => setTextTask(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="projectName">Project Name: </label>
        <input
          type="text"
          value={textProject}
          id="projectName"
          className="secondInput"
          onChange={(e) => setTextProject(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="state">Project Status: </label>
        <input
          type="text"
          value={ProjectState}
          id="state"
          className="status"
          onChange={(e) => setProjectState(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="participants">Assign Participants: </label>
        <input
          type="text"
          value={participants}
          id="projectName"
          className="secondInput"
          onChange={(e) => setParticipants(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Pick Deadline:</label>
        <input
          value={deadline}
          type="date"
          id="date"
          name="date"
          min="2000-01-01"
          max="2030-12-31"
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <button
        onClick={() =>
          handleButton(
            textTask,
            ProjectState,
            participants,
            deadline,
            textProject,
          )
        }
      >
        Create Task
      </button>
    </div>
  );
};

export default NewTaskForm;
