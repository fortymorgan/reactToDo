import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { SignInFormContainer, SignUpFormContainer } from '../containers/Forms';

const NoAuth = () => (
  <div className="auth-buttons">
    <div className="auth-button">
      <Link to="/signup">
        <button type="button" className="btn">
          Sign up
        </button>
      </Link>
    </div>
    <div className="auth-button">
      <Link to="/signin">
        <button type="button" className="btn">
          Sign in
        </button>
      </Link>
    </div>
  </div>
)

const NoAuthHeader = () => (
  <div className="app-header">
    <h1>To-do list</h1>
    <Route exact path="/" component={NoAuth} />
    <Route path="/signin" component={SignInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
)

export default NoAuthHeader;
