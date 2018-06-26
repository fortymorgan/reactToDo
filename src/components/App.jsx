import React from 'react';
import firebase from 'firebase';
import { LoginModal, RegistrationModal } from './Modals.jsx'
import HeaderContainer from '../containers/Header';
import ListItemsContainer from '../containers/ListItems';
import FooterContainer from '../containers/Footer'

const App = (props) => {
  const { signIn, signOut } = props;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      signIn(user);
    } else {
      signOut();
    }
  })

  return (
    <div className="jumbotron">
      <LoginModal />
      <RegistrationModal />
      <HeaderContainer />
      <ListItemsContainer />
      <FooterContainer />
    </div>
  )
}

export default App;
