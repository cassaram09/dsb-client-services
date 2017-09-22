import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Auth from '../modules/auth/authResource';

class SignUp extends Component {
  constructor(){
    super()

    this.state={
      user: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }

    // handle field changes
    this.onChange = (event) =>{
      const field = event.target.name;
      const user = this.state.user;
      user[field] = event.target.value
      return this.setState({user: user})
    }

    // dispatches the API call action
    this.signUp = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction('signup', this.state);
    }
  }

  // return the form
  render(){
    return(
      <div>
        <form onSubmit={this.signUp}>
          <input type='email' name="email" value={this.state.user.email} onChange={this.onChange}/>
          <input type='password' name="password" value={this.state.user.password} onChange={this.onChange}/>
          <input type='password' name="password_confirmation" value={this.state.user.password_confirmation} onChange={this.onChange}/>
          <input type="submit" className="btn btn-primary" onClick={this.signUp}/>
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: Auth.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
