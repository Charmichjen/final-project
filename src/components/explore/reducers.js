export const LOAD_SHAREDGOALS = 'LOAD_SHAREDGOALS';

export function sharedGoals(state = [], { type, payload }) {
  switch(type) {
    case LOAD_SHAREDGOALS:
      return payload;
    default:
      return state;
  }
}