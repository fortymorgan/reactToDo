import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

export default () => {
  const mountNode = document.getElementById('container');
  ReactDOM.render(<App />, mountNode);
};
