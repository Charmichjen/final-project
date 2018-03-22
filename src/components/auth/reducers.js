export const USER = 'USER';
export const CLEAR_USER = 'CLEAR_USER';

export function user(state = null, { type, payload }) {
  switch(type) {
    case USER: 
      return payload;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
}


