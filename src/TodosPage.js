import React, { Component } from 'react';
import Todos from './Todos';
import LoaderOne from './LoaderOne';

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
        {todos.length ? (<Todos todos={todos}/>) : (<LoaderOne/>)}
      </div>
    );
  };
};
