export const LOAD_SHAREDGOALS = 'LOAD_SHAREDGOALS';

// This reducer should probably live with the other "goal" reducers.
export function sharedGoals(state = [], { type, payload }) {
  switch(type) {
    case LOAD_SHAREDGOALS:
      return payload;
    default:
      return state;
  }
}