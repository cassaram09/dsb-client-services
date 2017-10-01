import Resource from 'r3-library';

import {API} from '../../utils/constants';
import Store from '../../store/store';

const User = new Resource('user', API.dev + '/users', API.headers)
  .configureState({})
  .registerNewAction('/password-reset', 'changePassword', 'POST')
  .registerNewAction(API.dev + '/users/current-user', 'getCurrentUser', 'GET', (state, action) => {
    return action.data 
  })
  .addReducerAction('update', (state, action) => action.data)
  .addResourceAction('/users', 'update', 'PATCH')

  console.log(User)

export default User;
