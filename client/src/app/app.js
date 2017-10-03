import React, { Component } from 'react';
import { Router, withRouter } from 'react-router-dom';

import Header from './containers/header/header';
import Main from './containers/main/main';
import Login from './containers/login/login'

import $R_User from './resources/userResource'
import Store from './store/store'

import './app.css';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {

  componentWillMount(){
    if (this.props.session) {
      $R_User.dispatchAction('getCurrentUser')(Store.dispatch)
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.session && !this.props.user.id) {
      $R_User.dispatchAction('getCurrentUser')(Store.dispatch)
    }
  }

  render() {

    if ( this.props.session == true ){
      return (
        <div className='app'>
          <Header session={this.props.session} user={this.props.user} />
          <Main session={this.props.session} user={this.props.user} />
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
  return {
    session: state.session,
    user: state.user
  }
};

export default withRouter(connect(mapStateToProps)(App));