import React from 'react';
import { Route } from 'react-router';
import { LoginReduxFormContainer, RegistrationReduxFormContainer } from '../containers/Forms';
import ToDoListHeader from '../containers/ToDoList';
import { ToDoListBody } from './ToDoList.jsx';
import NoAuth from './NoAuth.jsx';

const App = () => (
  <div className="app">
    <div className="app-header">
      <h1>To-do list</h1>
      <Route exact path="/" component={NoAuth} />
      <Route path="/app" component={ToDoListHeader} />
      <Route path="/signin" component={LoginReduxFormContainer} />
      <Route path="/signup" component={RegistrationReduxFormContainer} />
    </div>
    <Route path="/app" component={ToDoListBody} />
  </div>
)

export default App;
