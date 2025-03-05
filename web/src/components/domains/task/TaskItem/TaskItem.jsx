import styles from './TaskItem.module.css';

export function TaskItem({ name, priority, dueDate, assignees, project }) {
  return (
    <div className={styles.itemWrapper}>
      <span className={styles.taskName}>{name}</span>
      <span
        className={
          priority === 'Low'
            ? styles.priorityLow
            : priority === 'Medium'
              ? styles.priorityMedium
              : styles.priorityHigh
        }
      >
        {priority}
      </span>
      <span className={styles.dueDate}>{dueDate}</span>
      <span className={styles.assignees}>{assignees} </span>
      <span className={styles.project}>{project}</span>
    </div>
  );
}

TaskItem.defaultProps = {
  name: 'Untitled Task',
  priority: 'Medium',
  dueDate: 'No due date',
  assignees: 'No assignees',
  project: 'Unassigned project',
};
