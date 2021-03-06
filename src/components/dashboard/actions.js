import { ADD_GOAL, LOAD_GOALS, LOAD_COMPLETE, DELETE_COMPLETE_GOAL } from './reducers';
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

export function getCompletedGoals(id){
  return {
    type: LOAD_COMPLETE,
    payload: users.child(id).child('completedGoals').once('value').then(data => {
      const goals = data.val();

      if(!goals) return [];
      const result = Object.keys(goals).map(key => {
        const goal = goals[key];
        goal.name = goals[key].name;
        goal.id = key;
        return goal;
      });
      return result;
    })
  };
}

export function getUserGoals(id) {
  return {
    type: LOAD_GOALS,
    payload: users.child(id).child('goals').once('value').then(data => {
      const goals = data.val();

      if(!goals) return [];

      return Object.keys(goals).map(key => {
        let goal = {};
        goal.name = goals[key];
        goal.key = key;
        goal.completed = goals[key].completed;
        return goal;
      });
    })
  };
}

export function deleteCompletedGoal(id){
  return (dispatch, getState) => {
    const { uid } = getState().user;
    users.child(uid).child('completedGoals').child(id).remove();

    dispatch({
      type: DELETE_COMPLETE_GOAL,
      payload: id
    });
  };
}

