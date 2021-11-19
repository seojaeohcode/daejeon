import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header, { hello } from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);