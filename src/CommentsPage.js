import React, { Component } from 'react';
import Comments from './Comments';
import Loader from './Loader';

export default class CommentsPage extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          comments: json
        });
      });
  };

  render() {
    const { comments } = this.state;

    return (
      <div className='comments page'>
        {comments.length ? (
          <Comments comments={comments}/>
        ) : (
          <Loader/>
        )}
        <Loader/>
      </div>
    );
  };
};
