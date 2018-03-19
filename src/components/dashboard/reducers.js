export const ADD_GOAL = 'ADD_GOAL';

export function goal(state = [], { type, payload }) {
  switch(type) {
    case ADD_GOAL:
      return [
        ...state,
        payload
      ];
    default: 
      return state;
  }
}