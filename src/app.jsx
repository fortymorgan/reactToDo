import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import App from './components/App.jsx';
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
  const mountNode = document.getElementById('container');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    mountNode
  );
};
