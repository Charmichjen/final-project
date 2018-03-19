import { ADD_GOAL, DELETE_GOAL, COMPLETE_GOAL } from './reducers';
import { db } from '../../services/firebase';

const users = db.ref('users');

export function newGoal(goal) {
  return (dispatch, getState) => {
    let { uid } = getState().user;
    users.child(uid).child('goals').push(goal);
    dispatch({
      type: ADD_GOAL,
      payload: goal
    });
  };
}