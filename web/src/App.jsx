// import TaskItem from './components/domains/task/TaskItem/TaskItem';
import TaskList from './components/domains/task/TaskList/TaskList';

function App() {
  return (
    <>
      <h1>Task Manager</h1>
      {/* <TaskItem /> */}

      <TaskList
        tasks={[
          {
            id: 1,
            ProjectName: 'Re-work UI/UX',
            priority: 'low',
            dueDate: '12/05/2025',
            assignee: 'Said & Rachel',
            project: 'Time App',
            photos: ['https://cdn-icons-png.flaticon.com/512/430/430485.png'],
            studentPhotos: [
              'https://www.svgrepo.com/show/502898/user-group.svg',
            ],
          },
          {
            id: 2,
            ProjectName: 'Dark mode toggle',
            priority: 'high',
            dueDate: '09/03/2025',
            assignee: 'Umair & Precious',
            project: 'Asa Dark-mode Feature',
            photos: ['https://cdn-icons-png.flaticon.com/512/430/430485.png'],
            studentPhotos: [
              'https://www.svgrepo.com/show/502898/user-group.svg',
            ],
          },
          {
            id: 3,
            ProjectName: 'Accessibility check',
            priority: 'medium',
            dueDate: '15/04/2025',
            assignee: 'Michel & Ricardo',
            project: 'Timer App',
            photos: ['https://cdn-icons-png.flaticon.com/512/430/430485.png'],
            studentPhotos: [
              'https://www.svgrepo.com/show/502898/user-group.svg',
            ],
          },
          {
            id: 4,
            ProjectName: 'Notification Integration',
            priority: 'high',
            dueDate: '11/03/2025',
            assignee: 'Ebetsam & Deborah',
            project: 'Timer App',
            photos: ['https://cdn-icons-png.flaticon.com/512/430/430485.png'],
            studentPhotos: [
              'https://www.svgrepo.com/show/502898/user-group.svg',
            ],
          },
        ]}
      />
    </>
  );
}

export default App;
