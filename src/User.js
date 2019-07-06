import React from 'react';
import './User.css';

export default function User({ user }) {
  return (
    <div className='user' key={user.id}>
      <h3 className='user__name'>{user.name}</h3>
    </div>
  );
};
