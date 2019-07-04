import React from 'react';
import './Post.css';

export default function Post({ post, onDeletePost }) {
  return (
    <div className="post">
      <h2 className="post__title">{post.title}</h2>
      <p className="post__text">{post.body}</p>
      <button
        onClick={() => onDeletePost(post.id)}
        type="button"
        className="post__delete-btn"
      >
        Delete
      </button>
    </div>
  );
}
