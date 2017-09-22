import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import Store from '../store/store';  

function Header(props) {

  console.log(props.session)

  const logOut = (event) =>{
    event.preventDefault();
    Store.dispatch('logout')
  }

  return(
    <header className="header">
      <nav>
        <p>Session: {props.session ? 'true' : 'false'}</p>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;