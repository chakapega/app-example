import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import PostsPage from './PostsPage';
import './App.css';
import CommentsPage from './CommentsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/posts/" component={PostsPage} />
        <Route path="/comments" component={CommentsPage} />
      </Router>
    );
  }
}

export default App;
