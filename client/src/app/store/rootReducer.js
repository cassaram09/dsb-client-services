import {combineReducers} from 'redux';

import $R_User from '../resources/userResource';
import $R_Auth from '../resources/authResource';
import $R_Companies from '../resources/companiesResource';
import $R_Tasks from '../resources/tasksResource';

const rootReducer = combineReducers({
  user: $R_User.reducer,
  session: $R_Auth.reducer,
  companies: $R_Companies.reducer,
  tasks: $R_Tasks.reducer
})

export default rootReducer;