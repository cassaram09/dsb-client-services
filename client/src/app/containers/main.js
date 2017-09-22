import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom'

import Login from './login';
import Home from './home';
import SignUp from './signup';

import './main.css';

function Main(props) {

  return (
    <main className='main'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </main>
  )
}

export default Main;