export const ADD_GOAL = 'ADD_GOAL';
export const DELETE_GOAL = 'DELETE_GOAL';
export const COMPLETE_GOAL = 'COMPLETE_GOAL';
export const LOAD_GOALS = 'LOAD_GOALS';
export const EDIT_GOAL = 'EDIT_GOAL';

export function goals(state = [], { type, payload }) {
  switch(type) {
    case ADD_GOAL:
      return [
        ...state,
        payload
      ];

    case DELETE_GOAL:
      return state.filter(g => g.id !== payload);

    case COMPLETE_GOAL:
      return state.map(g => g.id === payload.id ? payload : g);

    case LOAD_GOALS:
      return payload;

    case EDIT_GOAL:
      return state.map(g => g.id === payload.id ? payload : g);
    
    default: 
      return state;
  }
}
