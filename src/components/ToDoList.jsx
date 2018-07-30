import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderContainer from '../containers/Header';
import ListItemsContainer from '../containers/ListItems';
import FooterContainer from '../containers/Footer';

export const ToDoListHeader = (props) => {
  const { currentUser, onSignOut } = props;

  return (
    <div className="auth-header">
      <h2>ToDo List</h2>
      <div className="auth-user-signout">
        <p className="username">{currentUser}</p>
        <button type="button" className="btn" onClick={onSignOut}>
          <FontAwesomeIcon icon="sign-out-alt" />
        </button>
      </div>
    </div>
  )
}

export const ToDoListBody = () => (
  <div className="app-body">
    <HeaderContainer />
    <ListItemsContainer />
    <FooterContainer />
  </div>
)
