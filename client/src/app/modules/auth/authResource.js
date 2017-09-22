import Resource from 'r3-library';
import {browserRouter} from 'react-router-dom'
import history from '../../history'
import {API} from '../../utils/constants';

const state = !!sessionStorage.jwt
const headers = {'Content-Type': "application/json"}

const Auth = new Resource('auth', '', headers)
  .registerDefaults()
  .configureState(state);

// login action
Auth.registerNewAction('/login', 'login', 'POST', (state, action) => {
  if ( action.data.error ) {
    console.log(`%c LOGIN UNSUCCESSFUL`, 'color: red')
    return state
  }
  sessionStorage.setItem('jwt', action.data.jwt)
  history.push('/')
  API.headers['AUTHORIZATION']= `Bearer ${action.data.jwt}`
  console.log(`%c LOGIN SUCCESSFUL`, 'color: blue')
  return !!sessionStorage.jwt
})

// sign up action
Auth.registerNewAction('/signup', 'signup', 'POST', (state, action) => {
  debugger
  sessionStorage.setItem('jwt', action.data.jwt)
  history.push('/');
  API.headers['AUTHORIZATION']= `Bearer ${action.data.jwt}`
  console.log(`%c SIGNUP SUCCESSFUL`, 'color: blue')
  return !!sessionStorage.jwt
})

// logout action
Auth.resourceActions.auth_logout = () => {
  return new Promise((resolve, reject) => {
    sessionStorage.removeItem('jwt');
    !sessionStorage.jwt ? resolve({session: false}) : reject(Error("Error"));
  });
}

// logout reducer
Auth.addReducerAction('logout', (state, action) => {
  console.log(`%c LOGOUT SUCCESSFUL`, 'color: blue')
  if ( sessionStorage.jwt ) {
    sessionStorage.removeItem('jwt');
    history.push('/');
    return !!sessionStorage.jwt
  }
  return !!sessionStorage.jwt
})

export default Auth;
