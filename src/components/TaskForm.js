//taskform (To add new task)

import React, { useState } from 'react';
import '../styles/TaskForm.css';

export default function TaskForm({ tasks, setTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
      priority,
      dueDate,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };

    setTasks([newTask, ...tasks]);
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setDueDate('');
    setTags('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Create a New Task</h2>
      </div>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
