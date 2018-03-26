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
  // Maybe wait for signout to complete before changing location
  // (which could stop signOut from happening)
  return auth.signOut().then(() => location.reload());
}

