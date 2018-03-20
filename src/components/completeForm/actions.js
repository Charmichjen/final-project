import { db } from '../../services/firebase';

const users = db.ref('users');

export function addCompletedGoal(goal) {
  return (dispatch, getState) => {
    let { uid } = getState().user;
    users.child(uid).child('completedGoals').push(goal);
  };
}