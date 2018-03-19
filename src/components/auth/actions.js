import { auth } from '../services/firebase';

export function listenForUser() {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: USER,
        payload: user
      });
    });
  };
}

export function logOut() {
  return auth.signOut();
}