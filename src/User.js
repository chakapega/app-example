import React from 'react';
import './User.css';

export default function User({ user }) {
  return (
    <div className='user'>
      <h3 className='user__name'>{user.name}</h3>
      <h4 className='user__nickname'>{user.username}</h4>
      <span className='user__email span'>{user.email}</span>
      <span className='user__city span'>{user.address.city}</span>
      <span className='user__website span'>{user.website}</span>
    </div>
  );
};
