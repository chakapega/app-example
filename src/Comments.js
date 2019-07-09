import React from 'react';
import Comment from './Comment';

export default function Comments({ comments, addLikeComment }) {
  return (
    <div className='comments'>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} addLikeComment={addLikeComment} />
      ))}
    </div>
  );
};
