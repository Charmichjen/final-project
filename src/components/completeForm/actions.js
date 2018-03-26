import { db } from '../../services/firebase';
import { COMPLETE_GOAL } from '../dashboard/reducers';

const users = db.ref('users');
const shared = db.ref('shared');

export function addCompletedGoal(goal) {
  return (dispatch, getState) => {

    let { uid, displayName } = getState().user;
    // use promise middleware!
    dispatch({
      type: COMPLETE_GOAL,
      payload: users.child(uid)
        .child('completedGoals')
        .push(goal)
        .then(data => {
          let sharedGoal = goal;
          sharedGoal.user = displayName;
          sharedGoal.uid = uid;
          sharedGoal.id = data.key;
          
          return goal.share 
            ? shared.push(sharedGoal)
            : sharedGoal;
          
    
        })
    });

  };
}



