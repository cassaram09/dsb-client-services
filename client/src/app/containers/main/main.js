import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom'

import Home from '../home/home';
import Companies from '../companies/companies';

import './main.css';

function Main(props) {

  debugger

  return (
    <main className='main'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/companies' component={Companies} />
      </Switch>
    </main>
  )
}

export default Main;