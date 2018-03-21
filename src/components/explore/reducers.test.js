import { LOAD_SHAREDGOALS, sharedGoals } from './reducers';

it.skip('default state of an empty array', () => {
  const state = sharedGoals(undefined, {});
  expect(state).toEqual([]); 
});

const firebaseShared = ['1', '2', '3'];

it('loads the shared goals', () => {
  const state = sharedGoals(undefined, { 
    type: LOAD_SHAREDGOALS, 
    payload: firebaseShared
  });
  expect(state).toEqual(['1', '2', '3']);
});
