import { auth } from '../../services/firebase';
import { USER, CLEAR_USER } from './reducers';
import { clearGoal } from '../dashboard/actions';

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
  clearGoal();
  return auth.signOut();
}

