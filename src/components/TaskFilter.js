//Taskfilter (filter task on the basis of visibility);

import React from 'react';
import '../styles/TaskFilter.css';

export default function TaskFilter({ filter, setFilter, tasks }) {
  const all = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = all - completed;

  return (
    <div className="task-filter">
     {/* show all task */}
      <button
        className={filter === 'All' ? 'active' : ''}
        onClick={() => setFilter('All')}
      >
        All ({all})
      </button>
      {/* show completed task */}
      <button
        className={filter === 'Completed' ? 'active' : ''}
        onClick={() => setFilter('Completed')}
      >
        Completed ({completed})
      </button>
      {/* show pending task */}
      <button
        className={filter === 'Pending' ? 'active' : ''}
        onClick={() => setFilter('Pending')}
      >
        Pending ({pending})
      </button>
    </div>
  );
}
