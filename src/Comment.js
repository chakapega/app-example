import React from 'react';
import './Comment.css';
import like from './images/like.png'

export default function Comment({ comment, addLikeComment }) {
  return (
    <div className='comment'>
      <h2 className='comment__title'>{comment.name}</h2>
      <p className='comment__text'>{comment.body}</p>
      <img src={like} className='comment__like_img' onClick={addLikeComment} alt='like.png' id={comment.id} ></img>
      <span className='comment__number_likes'>{comment.numberLikes}</span>
    </div>
  );
};
