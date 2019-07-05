import React from 'react';
import './Comment.css';

export default function Comment({ comment }) {
  return (
    <div className='comment'>
      <h2 className='comment__title'>{comment.name}</h2>
      <p className='comment__text'>{comment.body}</p>
    </div>
  );
};
