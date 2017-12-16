import axios from 'axios';
import { SUBSCRIBE, SIGNUP, LOGIN } from './types';

const BASE_URL = 'http://dev3.apppartner.com/Reactors/scripts';
const config = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
};

export const signup = ({ email, password, username }) => async dispatch => {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  data.append('username', username);
  const req = await axios.post(`${BASE_URL}/user-signup.php`, data, config);
  dispatch({ type: SIGNUP, payload: req.data });
};

export const login = ({ email, password }) => async dispatch => {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  const req = await axios.post(`${BASE_URL}/user-login.php`, data, config);
  dispatch({ type: LOGIN, payload: req.data });
};

export const subscribe = ({ email }) => async dispatch => {
  const data = new FormData();
  data.append('email', email);
  const req = await axios.post(`${BASE_URL}/add-email.php`, data, config);
  dispatch({ type: SUBSCRIBE, payload: req.data });
};
