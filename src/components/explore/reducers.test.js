import { LOAD_SHAREDGOALS, sharedGoals } from './reducers';

it('default state of an empty array', () => {
  const state = sharedGoals(undefined, {});
  expect(state).toEqual([]); 
});

it('loads the shared goals', () => {
  const state = sharedGoals(undefined, { 
    type: LOAD_SHAREDGOALS, 
    payload: ['1', '2', '3']
  });
  expect(state.sharedGoals).toEqual(['1', '2', '3']);
});
