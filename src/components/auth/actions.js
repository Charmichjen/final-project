import { auth } from '../../services/firebase';
import { USER, CLEAR_USER } from './reducers';

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

export function clearUser() {
  return {
    type: CLEAR_USER
  };
}

export function logOut() {
  location.reload();
  return auth.signOut();
}

