import {combineReducers} from 'redux';

import $R_User from '../resources/userResource';
import $R_Auth from '../resources/authResource';
import $R_Companies from '../resources/companiesResource';


const rootReducer = combineReducers({
  user: $R_User.reducer,
  session: $R_Auth.reducer,
  companies: $R_Companies.reducer
})

export default rootReducer;