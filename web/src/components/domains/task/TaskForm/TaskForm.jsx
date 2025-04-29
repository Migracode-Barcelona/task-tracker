import { useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskProject, setTaskProject] = useState('');

  const submitTask = async (e) => {
    e.preventDefault();

    if (!taskTitle.trim()) {
      alert('Please enter a task title');
      return;
    }

    try {
      const response = await fetch('http://localhost:3333/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: taskTitle,
          projectName: taskProject || 'No Project',
        }),
      });

      if (!response.ok) throw new Error('Failed to add task');

      // Clear form on success
      setTaskTitle('');
      setTaskProject('');
      alert('Task added successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add task');
    }
  };

  return (
    <form className={styles.formWrapper} onSubmit={submitTask}>
      <h1 className={styles.headingStyle}>New Task</h1>
      <fieldset className={styles.fieldsetStyle}>
        <label className={styles.taskLabelStyle}>
          Title
          <input
            type="text"
            className={styles.taskInputStyle}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
          />
        </label>

        <label className={styles.taskLabelStyle}>
          Project
          <input
            type="text"
            className={styles.taskInputStyle}
            value={taskProject}
            onChange={(e) => setTaskProject(e.target.value)}
          />
        </label>
      </fieldset>
      <button type="submit" className={styles.formButton}>
        Add task
      </button>
    </form>
  );
}

export { TaskForm };
