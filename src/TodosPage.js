import React, { Component } from 'react';
import Todos from './Todos';

export default class TodosPage extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.setState({
          todos: json
        });
      });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className='todos page'>
        <Todos todos={todos}/>
      </div>
    );
  };
};
