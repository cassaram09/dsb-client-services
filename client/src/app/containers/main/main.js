import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom'

import Home from '../home/home';

import './main.css';

function Main(props) {

  return (
    <main className='main'>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </main>
  )
}

export default Main;