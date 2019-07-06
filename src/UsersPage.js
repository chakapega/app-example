import React, { Component } from 'react';
import Users from './Users'

export default class UsersPage extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      this.setState({
        users: json
      });
    });
  };

  render() {
    const { users } = this.state;

    return (
      <div className='users page'>
        <Users users={users}/>
      </div>
    );
  };
};
