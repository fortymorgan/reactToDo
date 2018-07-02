import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore, push, routerMiddleware } from 'react-router-redux';
import createHistory from "history/createBrowserHistory";
import firebase from 'firebase';
import reducers from './reducers/reducers';
import App from './components/App.jsx';
import * as actions from './actions';

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const history = createHistory();
  const routingMiddleware = routerMiddleware(history);

  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(thunk),
      applyMiddleware(routingMiddleware),
    ),
  )
  
  syncHistoryWithStore(history, store);

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
      store.dispatch(push('/app'));
      store.dispatch(actions.signInSuccess(user));
      const snapshot = await firebase.database().ref('lists/' + user.uid).once('value');
      const list = snapshot.val();
      store.dispatch(actions.updateStateOnLogin(list));

      firebase.database().ref('lists/' + user.uid).on('child_added', (child) => {
        store.dispatch(actions.createTaskSuccess({ [child.key]: child.val() }));
      })
    } else {
      store.dispatch(push('/'));
    }
  });

  const mountNode = document.getElementById('container');
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    mountNode
  );
};
