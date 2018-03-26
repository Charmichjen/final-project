import { DELETE_GOAL, EDIT_GOAL } from '../dashboard/reducers';
import { db } from '../../services/firebase';

const users = db.ref('users');

// These are async actions, you need to handle accordingly

export function deleteGoal(id){
  return (dispatch, getState) => {
    const { uid } = getState().user;
    users.child(uid).child('goals').child(id).remove();

    return {
      type: DELETE_GOAL,
      payload: users.child(uid)
        .child('goals').child(id)
        .remove()
        .then(() => id)
    };
  };
}

export function editGoal(goal){
  return (dispatch, getState) => {
    let { uid } = getState().user;

    return {
      type: EDIT_GOAL,
      payload: users.child(uid)
        .child('goals').child(goal.id)
        .set(goal.name).then(() => goal)
    };
  };
}