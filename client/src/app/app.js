import React, { Component } from 'react';
import { Router } from 'react-router-dom';

import Header from './containers/header';
import Main from './containers/main';

import './app.css';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;