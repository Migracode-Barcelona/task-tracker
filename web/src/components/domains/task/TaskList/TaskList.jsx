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
      realiseDate: '12/05/2025',
      designers: 'Said, Rachael',
      projectName: 'Time App',
    },
    {
      title: 'Dark mode toggle',
      priority: 'High',
      realiseDate: '09/03/2025',
      designers: 'Umair, Precious',
      projectName: 'ASA Darkmode Feature',
    },
    {
      title: 'Accessibility checks',
      priority: 'Medium',
      realiseDate: '15/04/2025',
      designers: 'Michael, Ricardo',
      projectName: 'Time App',
    },
    {
      title: 'Notification integration',
      priority: 'High',
      realiseDate: '11/03/2025',
      designers: 'Ebtesam, Deborah',
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
