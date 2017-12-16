import { combineReducers } from 'redux';
import signup from './signupred';
import subscribe from './subreducer';
import login from './loginred';

const rootReducer = combineReducers({
  signupRed: signup,
  subscribeRed: subscribe,
  loginRed: login
});

export default rootReducer;
