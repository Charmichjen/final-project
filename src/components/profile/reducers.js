export const LOAD_USER = 'LOAD_USER';

export function userProfile(state = {}, { type, payload }) {
  switch(type) {
    case LOAD_USER:
      return payload;
    default:
      return state;
  }
}