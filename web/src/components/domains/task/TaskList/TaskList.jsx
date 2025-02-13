import { TaskItem } from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

/*
Please create the <TaskList /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Create a taskItems array and return a list of <TaskItem /> components.
*/

export function TaskList() {
  // create some task items here and return one task list for each item you have

  const taskItems = [
    {
      title: 'Re-work UI/UX',
      priority: 'Low',
      releaseDate: '12/05/2025',
      assignedTo: 'Said, Rachael',
      projectName: 'Time App',
    },
    {
      title: 'Dark mode toggle',
      priority: 'High',
      releaseDate: '09/03/2025',
      assignedTo: 'Umair, Precious',
      projectName: 'ASA Darkmode Feature',
    },
    {
      title: 'Accessibility checks',
      priority: 'Medium',
      releaseDate: '15/04/2025',
      assignedTo: 'Michael, Ricardo',
      projectName: 'Time App',
    },
    {
      title: 'Notification integration',
      priority: 'High',
      releaseDate: '11/03/2025',
      assignedTo: 'Ebtesam, Deborah',
      projectName: 'Time App',
    },
  ];

  return (
    <div className={styles.listWrapper}>
      {taskItems.map((task) => (
        <TaskItem key={task.title} {...task} />
      ))}
    </div>
  );
}
