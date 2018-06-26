import React from 'react';
import firebase from 'firebase';
import { LoginModal, RegistrationModal } from './Modals.jsx'
import HeaderContainer from '../containers/Header';
import ListItemsContainer from '../containers/ListItems';
import FooterContainer from '../containers/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const { signIn, signOut, updateStateOnLogin } = props;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        signIn(user);
        firebase.database().ref('lists/' + user.uid).once('value')
          .then(snapshot =>snapshot.val())
          .then(list => {
            const nextId = list.length > 0 ? +list[list.length - 1].id + 1 : 0;
            updateStateOnLogin(list, nextId);
          });
      } else {
        signOut();
      }
    })
  }

  onSignOut = () => {
    firebase.auth().signOut();
  }
  
  render() {
    const { currentUser } = this.props;

    if (currentUser !== '') {
      return (
        <div className="jumbotron">
          <p className="m-1">{currentUser.email}</p>
          <button type="button" className="btn btn-primary btn-sm" onClick={this.onSignOut}>
            Sign out
          </button>
          <HeaderContainer />
          <ListItemsContainer />
          <FooterContainer />
        </div>
      )
    } else {
      return (
        <div className="jumbotron">
          <LoginModal />
          <RegistrationModal />
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
  }
}
