import React from 'react';
import { LoginReduxFormContainer, RegistrationReduxFormContainer } from '../containers/Forms';
import HeaderContainer from '../containers/Header';
import ListItemsContainer from '../containers/ListItems';
import FooterContainer from '../containers/Footer';

const App = (props) => {
  const { currentUser, onSignOut, screen, signInScreen, signUpScreen } = props;

  const app = {
    noauth: (
      <div className="jumbotron">
        <div className="m-1">
          <button type="button" className="btn btn-primary btn-sm" onClick={signInScreen}>
            Sign in
          </button>
        </div>
        <div className="m-1">
          <button type="button" className="btn btn-primary btn-sm" onClick={signUpScreen}>
            Sign up
          </button>
        </div>
      </div>
    ),
    signup: (
      <div className="jumbotron">
        <RegistrationReduxFormContainer />
      </div>
    ),
    signin: (
      <div className="jumbotron">
        <LoginReduxFormContainer />
      </div>
    ),
    loggedin: (
      <div className="jumbotron">
        <p className="m-1">{currentUser}</p>
        <button type="button" className="btn btn-primary btn-sm" onClick={onSignOut}>
          Sign out
        </button>
        <HeaderContainer />
        <ListItemsContainer />
        <FooterContainer />
      </div>
    )
  }

  return app[screen];
}

export default App;
