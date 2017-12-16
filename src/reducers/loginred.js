import { LOGIN } from '../actions/types';

export default function login(state = null, { type, payload }) {
  switch (type) {
    case LOGIN:
      return { ...payload };
    default:
      return state;
  }
}
