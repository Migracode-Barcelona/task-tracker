import styles from './TaskItem.module.css';

export function TaskItem(props) {
  return (
    <div className={styles.itemWrapper}>
      <span className={styles.taskName}>{props.name}</span>
      <span
        className={
          props.priority === 'Low'
            ? styles.priorityLow
            : props.priority === 'Medium'
              ? styles.priorityMedium
              : styles.priorityHigh
        }
      >
        {props.priority}
      </span>
      <span className={styles.dueDate}>{props.dueDate}</span>
      <span className={styles.assignees}>{props.assignees} </span>
      <span className={styles.project}>{props.project}</span>
    </div>
  );
}
