import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import PostsPage from './PostsPage';
import './App.css';
import CommentsPage from './CommentsPage';
import TodosPage from './TodosPage';
import UsersPage from './UsersPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/posts/" component={PostsPage} />
        <Route path="/comments" component={CommentsPage} />
        <Route path="/todos" component={TodosPage} />
        <Route path="/users" component={UsersPage} />
      </Router>
    );
  };
};

export default App;
