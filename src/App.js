import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ReactDOM from 'react-dom';
import React, { Component, Fragment } from "react";
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        {Header()}
        {Body()}
        {Footer()}
      </Fragment>
    );
  }
}

export default App;