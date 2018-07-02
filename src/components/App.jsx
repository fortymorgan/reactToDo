import React from 'react';
import { Route } from 'react-router';
import { LoginReduxFormContainer, RegistrationReduxFormContainer } from '../containers/Forms';
import ToDoListContainer from '../containers/ToDoList';
import NoAuth from './NoAuth.jsx';

const App = () => (
  <div className="app-container">
    <Route exact path="/" component={NoAuth} />
    <Route path="/app" component={ToDoListContainer} />
    <Route path="/signin" component={LoginReduxFormContainer} />
    <Route path="/signup" component={RegistrationReduxFormContainer} />
  </div>
)

export default App;
