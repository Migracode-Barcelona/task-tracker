import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import { TaskList } from './components/domains/task/TaskList/TaskList';
import NewTask from './components/domains/task/NewTask/NewTask';
import './index.css';
import NewTaskPage from './pages/NewTaskPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<NewTaskPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
