import { TaskItem } from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

export function TaskList({ tasksItems }) {
  return (
    <div className={styles.listWrapper}>
      {tasksItems.map((task) => (
        <TaskItem
          key={task.id}
          name={task.name}
          priority={task.priority}
          dueDate={task.dueDate}
          assignees={task.assignees}
          project={task.project}
        />
      ))}
    </div>
  );
}
