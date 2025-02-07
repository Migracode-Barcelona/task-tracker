import styles from './TaskList.module.css';
import TaskItem from '../TaskItem/TaskItem';
import { PropTypes } from 'prop-types';

/*
Please create the <TaskList /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Create a taskItems array and return a list of <TaskItem /> components.
*/

function TaskList(props) {
  // create some task items here and return one task list for each item you have
  return (
    <div className={styles.listWrapper}>
      {props.TaskListInfo.map((listItem) => {
        return (
          <TaskItem
            key={listItem.id}
            ProjectTask={listItem.ProjectTask}
            ProjectStatus={listItem.ProjectStatus}
            date={listItem.date}
            participants={`${listItem.participants[0]}, ${listItem.participants[1]}`}
            project={listItem.project}
          />
        );
      })}
    </div>
  );
}

TaskList.propTypes = {
  TaskListInfo: PropTypes.arrayOf(
    PropTypes.shape({
      // key: PropTypes.PropTypes.number.isRequired,
      ProjectTask: PropTypes.string.isRequired,
      ProjectStatus: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      participants: PropTypes.array.isRequired,
      project: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TaskList;
