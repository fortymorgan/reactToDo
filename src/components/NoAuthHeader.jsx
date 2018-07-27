import React from 'react';
import { Route } from 'react-router';
import { SignInFormContainer, SignUpFormContainer } from '../containers/Forms';
import NoAuthContainer from '../containers/NoAuth';

const NoAuthHeader = () => (
  <div className="app-header">
    <h1>To-do list</h1>
    <Route exact path="/" component={NoAuthContainer} />
    <Route path="/signin" component={SignInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
)

export default NoAuthHeader;
