import { LOAD_USER } from './reducers';
import { db } from '../../services/firebase';

const user = db.ref('users');

export function loadProfile(id) {
  return {
    type: LOAD_USER,
    payload: user.child(id).once('value').then(data => data.val())
  };
}