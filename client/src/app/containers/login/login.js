import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import $R_Auth from '../../resources/authResource';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import './login.css'

class Login extends Component {
  constructor(){
    super()

    this.state={
      user: {
        email: '',
        password: ''
      }
    }

    // handle field changes
    this.onChange = (event) =>{
      const field = event.target.name;
      const user = this.state.user;
      user[field] = event.target.value
      this.setState({user: user})
    }

    // dispatches the API call action
    this.onSave = (event) => {
      event.preventDefault();
      this.props.actions.dispatchAction('login', this.state);
    }
  }

  // return the form
  render(){
    return(
      <div className='login-form'>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment stacked>
                <div className='error'>
                  {this.props.error}
                </div>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  onChange={this.onChange}
                  name='email'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={this.onChange}
                />
                <Button className='login-button' onClick={this.onSave} fluid size='large'>Login</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: $R_Auth.dispatchAction}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Login);



