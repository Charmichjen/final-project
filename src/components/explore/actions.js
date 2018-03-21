import { LOAD_SHAREDGOALS } from './reducers';
import { db } from '../../services/firebase';

const shared = db.ref('shared');

export function getSharedGoals() {
  return {
    type: LOAD_SHAREDGOALS,
    payload: shared.once('value').then(data => {
      const sharedGoals = data.val();

      if(!sharedGoals) return [];

      return Object.keys(sharedGoals).map(key => {
        let goal = sharedGoals[key];
        return goal;
      });
    })
  };
}