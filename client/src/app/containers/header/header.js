import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Store from '../../store/store';  
import $R_Auth from '../../resources/authResource';

import './header.css'

class Header extends Component {
  constructor(props){
    super(props)

    this.logOut = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction('logout')
    }
  }
  
  render() {    
    return(
      <header className="header">
        Logged in as {this.props.user.email}
        <nav>
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
            <li><Link to='/companies'>Companies</Link></li>
            {this.props.session && <li><a href='/logout' onClick={this.logOut}>Logout</a></li>}
            
          </ul>
        </nav>
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: $R_Auth.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Header);