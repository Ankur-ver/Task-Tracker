import React, { useState } from 'react';
import Login from './components/Login';
import TaskDashboard from './components/TaskDashboard';
import { loadFromLocalStorage } from './utils/localstorage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [username, setUsername] = useState(loadFromLocalStorage('username'));

  return (
    <ThemeProvider>
      {username ? (
        <TaskDashboard username={username} setUsername={setUsername} />
      ) : (
        <Login setUsername={setUsername} />
      )}
    </ThemeProvider>
  );
}

export default App;