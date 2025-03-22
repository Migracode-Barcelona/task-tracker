import { v4 as uuidv4 } from "uuid";

export const allTasks = new Map();

const task1 = {
  id: uuidv4(),
  title: "Re-work UI/UX",
  priority: "Low",
  releaseDate: "12/05/2025",
  assignedTo: "Said, Rachael",
  projectName: "Time App",
  owner: "email@domain.com",
};

const task2 = {
  id: uuidv4(),
  title: "Dark mode toggle",
  priority: "High",
  releaseDate: "09/03/2025",
  assignedTo: "Umair, Precious",
  projectName: "ASA Darkmode Feature",
  owner: "email@domain.com",
};

const task3 = {
  id: uuidv4(),
  title: "Accessibility checks",
  priority: "Medium",
  releaseDate: "15/04/2025",
  assignedTo: "Michael, Ricardo",
  projectName: "Time App",
  owner: "email@domain.com",
};

const task4 = {
  id: uuidv4(),
  title: "Notification integration",
  priority: "High",
  releaseDate: "11/03/2025",
  assignedTo: "Ebtesam, Deborah",
  projectName: "Time App",
  owner: "email@another-domain.com",
};

allTasks
  .set(task1.id, task1)
  .set(task2.id, task2)
  .set(task3.id, task3)
  .set(task4.id, task4);
