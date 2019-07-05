import React from 'react';
import Comment from './Comment';

export default function Comments({ comments }) {
  return (
    <div className='comments'>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment}/>
      ))}
    </div>
  );
};
