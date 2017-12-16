import { SUBSCRIBE } from '../actions/types';

export default function subscribe(state = null, { type, payload }) {
  switch (type) {
    case SUBSCRIBE:
      return { ...payload };
    default:
      return state;
  }
}
