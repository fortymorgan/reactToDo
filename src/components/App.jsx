import React from 'react';
import { Route } from 'react-router';
import ToDoListHeader from '../containers/ToDoList';
import { ToDoListBody } from './ToDoList.jsx';
import NoAuthHeader from './NoAuthHeader.jsx';

const App = () => (
  <div className="app">
    <Route exact path="/" component={NoAuthHeader} />
    <Route path="/signin" component={NoAuthHeader} />
    <Route path="/signup" component={NoAuthHeader} />
    <Route path="/app" component={ToDoListHeader} />
    <Route path="/app" component={ToDoListBody} />
  </div>
)

export default App;
