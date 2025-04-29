import { useFetchData } from '../../../../hooks/useFetchData';
import styles from './TaskList.module.css';
import { TaskItem } from '../TaskItem/TaskItem'; // Correct path

export default function TaskList() {
  const { data: tasks, isLoading, error } = useFetchData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.listWrapper}>
      {tasks?.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          priority={task.priority}
          releaseDate={task.releaseDate}
          assignedTo={task.assignedTo}
          projectName={task.projectName}
        />
      ))}
    </div>
  );
}
