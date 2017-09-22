import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom'

import Login from './login';
import Home from './home';
import history from '../history';

function Main(props) {

  return (
    <main className='main'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </main>
  )
}

export default Main;