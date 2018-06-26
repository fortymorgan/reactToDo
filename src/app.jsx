import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import reducers from './reducers/reducers';
import AppContainer from './containers/App';
import { getItemsList } from './storage';

const getInitialState = () => {
  const items = getItemsList();
  const nextId = items.length > 0 ? +items[items.length - 1].id + 1 : 0;

  return { items, nextId };
}

const store = createStore(
  reducers,
  getInitialState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
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
