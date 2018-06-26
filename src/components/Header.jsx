import React from 'react';
import cn from 'classnames';
import firebase from 'firebase';
import InputFormContainer from '../containers/InputForm';

export default class Header extends React.Component {
  onToggleAll = () => {
    const { toggleAllTaskState } = this.props;
    toggleAllTaskState();
  }

  onSignOut = () => {
    firebase.auth().signOut();
  }

  render() {
    const { isAllItemsFinished, user } = this.props;

    let userData;

    if (user !== '') {
      userData = (
        <div>
          <p className="m-1">{user}</p>
          <button type="button" className="btn btn-primary btn-sm" onClick={this.onSignOut}>
            Sign out
          </button>
        </div>
      )
    } else {
      userData = (
        <div>
          <div className="m-1">
            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#signInForm">
              Sign in
            </button>
          </div>
          <div className="m-1">
            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#signUpForm">
              Sign up
            </button>
          </div>
        </div>
      )
    }

    const toggleAllButtonClassName = cn({
      btn: true,
      'btn-sm': true,
      'border-0': true,
      'btn-secondary': isAllItemsFinished,
    });
  
    return(
      <div className="mb-3 d-flex justify-content-start">
        <div className="m-1">
          <button type="button" className={toggleAllButtonClassName} onClick={this.onToggleAll}>Toggle all</button>
        </div>
        <InputFormContainer />
        {userData}
      </div>
    )
  }
}
