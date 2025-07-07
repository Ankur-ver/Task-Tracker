import React from 'react';
import { FaTrash, FaCheckCircle, FaCircle } from 'react-icons/fa';
import '../styles/TaskItem.css';

export default function TaskItem({ task, setTasks }) {
  const toggleComplete = () => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks((prev) => prev.filter((t) => t.id !== task.id));
    }
  };

  const priority = (task.priority || 'Medium').toLowerCase();

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <h3>{task.title}</h3>
        <div className="task-actions">
          <button onClick={toggleComplete} title="Toggle Complete">
            {task.completed ? <FaCheckCircle color="green" /> : <FaCircle color="gray" />}
          </button>
          <button onClick={deleteTask} title="Delete Task">
            <FaTrash color="red" />
          </button>
        </div>
      </div>
      {task.description && <p>{task.description}</p>}
      <div className="meta">
        <span className={`priority-${priority}`}>{task.priority || 'Medium'} Priority</span>
        {task.dueDate && <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>}
      </div>
      {task.tags && task.tags.length > 0 && (
        <div className="tags">
          {task.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}
      <small>Created: {new Date(task.createdAt).toLocaleString()}</small>
    </div>
  );
}