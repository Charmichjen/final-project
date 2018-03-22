import { db } from '../../services/firebase';
import { COMPLETE_GOAL } from '../dashboard/reducers';

const users = db.ref('users');
const shared = db.ref('shared');

export function addCompletedGoal(goal) {
  return (dispatch, getState) => {

    dispatch({
      type: COMPLETE_GOAL,
      payload: goal
    });

    let { uid, displayName } = getState().user;
    users.child(uid).child('completedGoals').push(goal);
    let sharedGoal = goal;
    sharedGoal.user = displayName;
    sharedGoal.uid = uid;
    if(goal.share) shared.push(sharedGoal);
   
  };
}



