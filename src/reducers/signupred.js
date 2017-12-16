import { SIGNUP } from '../actions/types';

export default function signup(state = null, { type, payload }) {
  switch (type) {
    case SIGNUP:
      return { ...payload };
    default:
      return state;
  }
}
