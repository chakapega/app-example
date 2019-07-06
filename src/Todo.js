import React from 'react';
import './Todo.css';

export default function Todo({ todo }) {
  return (
    <div className='todo'>
      <h3 className='todo__title'>{todo.title}</h3>
      <span className='todo__status'>Status: {todo.completed ? '✓' : '🞩'}</span>
    </div>
  );
};
