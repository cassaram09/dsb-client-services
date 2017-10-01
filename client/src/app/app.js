import React, { Component } from 'react';
import { Router } from 'react-router-dom';

import Header from './containers/header/header';
import Main from './containers/main/main';
import Login from './containers/login/login'

import './app.css';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    if ( this.props.session == true ){
      return (
        <div className='app'>
          <Header session={this.props.session} />
          <Main session={this.props.session} />
        </div>
      )
    } else {
      return (
        <div className='app'>
          <Login error={this.props.session.error} />
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => { 
  return {session: state.session};
};

export default connect(mapStateToProps)(App);