import React from 'react';
import { Route } from 'react-router';
import { SignInFormContainer, SignUpFormContainer } from '../containers/Forms';
import NoAuth from './NoAuth.jsx';

const NoAuthHeader = () => (
  <div className="app-header">
    <h1>To-do list</h1>
    <Route exact path="/" component={NoAuth} />
    <Route path="/signin" component={SignInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
)

export default NoAuthHeader;
