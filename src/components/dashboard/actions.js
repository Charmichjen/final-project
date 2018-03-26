import { ADD_GOAL, LOAD_GOALS, LOAD_COMPLETE, DELETE_COMPLETE_GOAL } from './reducers';
import { db } from '../../services/firebase';

const users = db.ref('users');

export function newGoal(goal) {
  // use promise middleware to do this!
  return {
      type: ADD_GOAL,
      payload: users.child(uid).child('goals').push(goal)
  };
}

// extract common functionality:
const pivotGoals = goals => {
  if(!goals) return [];
  return Object.keys(goals).map(key => {
    const goal = goals[key];
    // no need to assign other props, they are already on goal!
    goal.id = key;
    return goal;
  });
}

const getGoals = (id, type) => users.child(id)
  .child(type)
  .once('value')
  .then(data => pivotGoals(data.val()))

export function getCompletedGoals(id){
  return {
    type: LOAD_COMPLETE,
    payload: getGoals(id, 'completedGoals')
  };
}

export function getUserGoals(id) {
  return {
    type: LOAD_GOALS,
    payload: getGoals(id, 'goals')
  };
}

export function deleteCompletedGoal(id){
  return (dispatch, getState) => {
    const { uid } = getState().user;
    // this is async, you need to wait before dispatch!!!

    dispatch({
      type: DELETE_COMPLETE_GOAL,
      payload: users.child(uid)
        .child('completedGoals')
        .child(id)
        .remove()
        .then(() => id)
    });
  };
}

