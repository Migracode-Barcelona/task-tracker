import React from 'react';

const NewTaskForm = () => {
  return (
    <div className="taskBox">
      <div>
        <label htmlFor="taskName">Task Name: </label>
        <input
          type="text"
          value={textTask}
          id="taskName"
          className="firstInput"
        />
      </div>
      <div>
        <label htmlFor="projectName">Project Name: </label>
        <input
          type="text"
          value={textProject}
          id="projectName"
          className="secondInput"
        />
      </div>
      <div>
          <label htmlFor="state">Project Status: </label>
        <input
          type="text"
          value={ProjectState}
          id="state"
          className="status"
        />
     
      <div>
        <label htmlFor="participants">Assign Participants: </label>
        <input
          type="text"
          value={participants}
          id="projectName"
          className="secondInput"
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
        />
      </div>

      <button>Create Task</button>
    </div>
  );
};

export default NewTaskForm;
