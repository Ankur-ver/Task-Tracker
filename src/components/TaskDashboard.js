//Main Dashboard (shows chart of tasks task form and tasklist)

import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import SearchBar from './SearchBar';
import ProgressChart from './ProgressChart';
import { loadFromLocalStorage,saveToLocalStorage } from '../utils/localstorage';
import '../styles/TaskDashboard.css';

export default function TaskDashboard({ username, setUsername }) {
  const [tasks, setTasks] = useState(loadFromLocalStorage('tasks') || []);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    saveToLocalStorage('tasks', tasks);
  }, [tasks]);

  const logout = () => {
    localStorage.clear();
    setUsername(null);
  };
  /* filtered task */
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'Completed') return task.completed;
      if (filter === 'Pending') return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
  <div className="dashboard">
    <header className="dashboard-header">
      <h2>Welcome, {username} 👋</h2>
      <button onClick={logout}>Logout</button>
    </header>
    
    <div className="main_c">
  <div className="inside">
    <TaskForm tasks={tasks} setTasks={setTasks} />
  </div>
  <div className="place">
   <SearchBar search={search} setSearch={setSearch} />
    <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />
    <TaskList tasks={filteredTasks} setTasks={setTasks} />
  </div>
  <div className="chart">
   <ProgressChart tasks={filteredTasks} />
  </div>
</div>

  </div>
);

}