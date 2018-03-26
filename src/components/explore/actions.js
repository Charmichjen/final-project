import { LOAD_SHAREDGOALS } from './reducers';
import { db } from '../../services/firebase';

const shared = db.ref('shared');

export function getSharedGoals() {
  return {
    type: LOAD_SHAREDGOALS,
    // nice job using promise middleware here!
    payload: shared.once('value').then(data => {
      const sharedGoals = data.val();

      if(!sharedGoals) return [];

      // If this was in same files as other goals, you could reuse pivot function...
      return Object.keys(sharedGoals).map(key => {
        let goal = sharedGoals[key];
        goal.id = key;
        return goal;
      });
    })
  };
}