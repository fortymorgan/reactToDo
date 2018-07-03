import React from 'react';
import HeaderContainer from '../containers/Header';
import ListItemsContainer from '../containers/ListItems';
import FooterContainer from '../containers/Footer';

export const ToDoListHeader = (props) => {
  const { currentUser, onSignOut } = props;

  return (
    <div className="app-header">
      <h1>To-do list</h1>
      <div className="auth-user-signout">
        <p className="username">{currentUser}</p>
        <button type="button" className="btn" onClick={onSignOut}>
          Sign out
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
