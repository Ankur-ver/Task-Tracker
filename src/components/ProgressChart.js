//Progresschart of tasks (shows progress of tasks either it is completed or not)

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#00C49F', '#FF8042'];

export default function ProgressChart({ tasks }) {
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;
  const data = [
    { name: 'Completed', value: completed },
    { name: 'Pending', value: pending },
  ];

  return (
    <div className="progress-chart" style={{ width: '100%', height: 300, marginTop: '2rem' }}>
      <h3 style={{ textAlign: 'center' }}>Task Completion Overview</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
           {/*Map entry*/}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
