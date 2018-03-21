import { DELETE_GOAL, EDIT_GOAL } from '../dashboard/reducers';
import { db } from '../../services/firebase';

const users = db.ref('users');

export function deleteGoal(id){
  return (dispatch, getState) => {
    const { uid } = getState().user;
    users.child(uid).child('goals').child(id).remove();

    dispatch({
      type: DELETE_GOAL,
      payload: id
    });
  };
}

export function editGoal(goal){
  return (dispatch, getState) => {
    let { uid } = getState().user;
    users.child(uid).child('goals').child(goal.id).set(goal.name);

    dispatch({
      type: EDIT_GOAL,
      payload: goal
    });
  };
}