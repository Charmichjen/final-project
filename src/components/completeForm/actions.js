import { db } from '../../services/firebase';

const users = db.ref('users');
const shared = db.ref('shared');

export function addCompletedGoal(goal) {
  return (dispatch, getState) => {
    let { uid, displayName } = getState().user;
    users.child(uid).child('completedGoals').push(goal);
    let sharedGoal = goal;
    sharedGoal.user = displayName;
    sharedGoal.uid = uid;
    if(goal.share) shared.push(sharedGoal);
  };
}



