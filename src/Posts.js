import React from 'react';
import Post from './Post';
import './Posts.css';

export default function Posts({
  posts,
  filtered,
  filterText,
  onDeletePost,
  onFilterChange,
}) {
  const renderPosts = filterText ? filtered : posts;

  return (
    <div className="posts">
      <label className="posts__filter-label" htmlFor="posts-filter">Filter posts by title:</label>
      <input type="text" className="posts__filter" id="posts-filter" onChange={onFilterChange} />
      {renderPosts.map(post => (
        <Post key={post.id} post={post} onDeletePost={onDeletePost} />
      ))}
    </div>
  );
}
