import TaskList from './components/domains/task/TaskList/TaskList';
// import TaskItem from './components/domains/task/TaskItem/TaskItem';

function App() {
  return (
    <>
      {/* <TaskItem
        ProjectTask="Rework UI/UX"
        ProjectStatus="Low"
        date="12/05/2025"
        participants="Said, Rachel"
        project="Timer App"
      ></TaskItem> */}

      <TaskList
        TaskListInfo={[
          {
            ProjectTask: 'Rework UI/UX',
            ProjectStatus: 'Low',
            date: '12/05/2025',
            participants: ['Said', ' Rachel'],
            project: 'Timer App',
          },
          {
            ProjectTask: 'Dark Mode Toggle',
            ProjectStatus: 'High',
            date: '09/03/2025',
            participants: ['Umair', ' Precious'],
            project: 'ASA DarkMode Feature',
          },
          {
            ProjectTask: 'Accessibility Checks',
            ProjectStatus: 'Medium',
            date: '15/04/2025',
            participants: ['Micheal', ' Ricardo'],
            project: 'Timer App',
          },
          {
            ProjectTask: 'Notification Integration',
            ProjectStatus: 'High',
            date: '11/03/2025',
            participants: ['Ebetsam', ' Deborah'],
            project: 'Timer App',
          },
        ]}
      ></TaskList>
    </>
  );
}

export default App;
