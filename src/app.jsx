import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import reducers from './reducers/reducers';
import AppContainer from './containers/App';

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

  const mountNode = document.getElementById('container');
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    mountNode
  );
};
