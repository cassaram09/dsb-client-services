import {combineReducers} from 'redux';

import User from '../modules/user/userResource';
import Auth from '../modules/auth/authResource';

const rootReducer = combineReducers({
  user: User.reducer,
  session: Auth.reducer
})

export default rootReducer;