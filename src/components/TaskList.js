import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

export default function TaskList({ tasks, setTasks }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} setTasks={setTasks} />
        ))
      )}
    </div>
  );
}
