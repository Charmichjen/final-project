import { LOAD_USER, userProfile } from './reducers';

it.skip('default state of an empty object', () => {
  const state = userProfile(undefined, {});
  expect(state).toEqual({}); 
});

const user = { name: 'name', goals: ['1', '2', '3'] };

it('loads the shared goals', () => {
  const state = userProfile(undefined, { 
    type: LOAD_USER, 
    payload: user
  });
  expect(state).toEqual({ name: 'name', goals: ['1', '2', '3'] });
});