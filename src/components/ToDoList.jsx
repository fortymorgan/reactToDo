import React from 'react';
import HeaderContainer from '../containers/Header';
import ListItemsContainer from '../containers/ListItems';
import FooterContainer from '../containers/Footer';

const ToDoList = (props) => {
  const { currentUser, onSignOut } = props;

  return (
    <div>
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

export default ToDoList;
