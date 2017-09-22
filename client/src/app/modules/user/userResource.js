import Resource from 'r3-library';

import {API} from '../../utils/constants';
import Store from '../../store/store';

const User = new Resource('user', API.dev + '/users', API.headers)
  .registerNewAction('/password-reset', 'changePassword', 'POST')
  .registerNewAction('/current-user', 'getCurrentUser', 'GET', (state, action) => action.data )
  .addReducerAction('update', (state, action) => action.data)
  .addResourceAction('/users', 'update', 'PATCH')

export default User;
