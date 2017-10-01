import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Store from '../../store/store';  
import Auth from '../../modules/auth/authResource';

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
        Logged in with ID {this.props.user.id}
        <nav>
          <ul>
            {this.props.session && <li><a href='/logout' onClick={this.logOut}>Logout</a></li>}
          </ul>
        </nav>
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: Auth.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Header);