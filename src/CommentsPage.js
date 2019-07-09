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
        json.map(comment => {
          comment.numberLikes = 0;
        });

        console.log(json);

        this.setState({
          comments: json
        });
      });
  };

  addLikeComment = e => {
    console.log(e);
    const { comments } = this.state;
    const newComments = JSON.parse(JSON.stringify(comments));

    newComments.map(comment => {
      if(comment.id === +e.target.id) {
        ++comment.numberLikes;
      };
    });

    this.setState({
      comments: newComments
    });
  };

  render() {
    const { comments } = this.state;

    return (
      <div className='comments page'>
        {comments.length ? (
          <Comments comments={comments} addLikeComment={this.addLikeComment}/>
        ) : (
          <Loader/>
        )}
        <Loader/>
      </div>
    );
  };
};
