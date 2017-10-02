import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom'

import Home from '../home/home';
import Companies from '../companies/companies';
import Company from '../companies/company';
import Tasks from '../tasks/tasks';


import './main.css';

function Main(props) {

  return (
    <main className='main'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/companies/:id' component={Company} />
        <Route path='/companies' component={Companies} />
        <Route path='/tasks' component={Tasks} />
       
      </Switch>
    </main>
  )
}

export default Main;