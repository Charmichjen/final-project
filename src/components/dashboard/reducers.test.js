import { goal, ADD_GOAL } from './reducers';


it('default state of an empty array', () => {
  const state = goal(undefined, {});
  expect(state).toEqual([]);
});