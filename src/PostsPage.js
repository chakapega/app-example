import React, { Component } from 'react';
import Posts from './Posts';
import Loader from './Loader';

export default class PostsPage extends Component {
  state = {
    posts: [],
    filtered: [],
    filterText: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log('Response: ', json);
        this.setState({ posts: json });
      });
  }

  onDeletePost = postId => {
    console.log('Delete post clicked!');
    console.log('Delete post id: ', postId);

    const { posts } = this.state;

    const newPosts = posts.filter(post => post.id !== postId);
    this.setState({ posts: newPosts });
  };

  onFilterChange = e => {
    const { value: filterText } = e.target;
    const { posts } = this.state;
    this.setState({ filterText });

    const filtered = posts.filter(post => {
      return post.title.includes(filterText);
    });

    this.setState({ filtered });
  };

  render() {
    const { posts, filtered, filterText } = this.state;

    return (
      <div className="posts page">
        {posts.length ? (
          <Posts
            posts={posts}
            filtered={filtered}
            filterText={filterText}
            onDeletePost={this.onDeletePost}
            onFilterChange={this.onFilterChange}
          />
        ) : (
          <Loader />
        )}
        <Loader />
      </div>
    );
  };
};
