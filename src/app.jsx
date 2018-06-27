import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import reducers from './reducers/reducers';
import AppContainer from './containers/App';
import * as actions from './actions';

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    devtoolMiddleware,
  ),
)

export default () => {
  const config = {
    apiKey: "AIzaSyANC1Oo_YO56Z3pGzxxtZ4LxxVxkJDLxGk",
    authDomain: "todo-list-84b73.firebaseapp.com",
    databaseURL: "https://todo-list-84b73.firebaseio.com",
    projectId: "todo-list-84b73",
    storageBucket: "todo-list-84b73.appspot.com",
    messagingSenderId: "685646646125"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      store.dispatch(actions.signInSuccess(user));
      const snapshot = await firebase.database().ref('lists/' + user.uid).once('value');
      const list = snapshot.val();
      store.dispatch(actions.updateStateOnLogin(list));

      firebase.database().ref('lists/' + user.uid).on('child_added', (child) => {
        store.dispatch(actions.createTaskSuccess({ [child.key]: child.val() }));
      })
    }
  });



  const mountNode = document.getElementById('container');
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    mountNode
  );
};
