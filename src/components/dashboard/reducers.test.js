import { goals, ADD_GOAL, DELETE_GOAL, COMPLETE_GOAL, LOAD_GOALS } from './reducers';


it.skip('default state of an empty array', () => {
  const state = goals(undefined, {});
  expect(state).toEqual([]);
});

it.skip('adds a goal', () => {
  const state = goals([], { 
    type: ADD_GOAL, 
    payload: { name: 'goal' }
  });
  expect(state).toEqual([{ name: 'goal' }]);
});

it.skip('deletes a goal', () => {
  const state = goals([{ id: 123 }], {
    type: DELETE_GOAL,
    payload: 123,
  });
  expect(state).toEqual([]);
});

const futureGoals = [{
  id: 123,
  name: 'pizza',
  completed: false
}];

const crushedGoal = {
  id: 123,
  name: 'pizza',
  completed: true,
  date: '3/19/18'
};

it.skip('completes a goal', () => {
  const state = goals(futureGoals, { 
    type: COMPLETE_GOAL,
    payload: crushedGoal
  });
  expect(state).toEqual([crushedGoal]);
});

it.skip('Loads the auth users goals', () => {
  const state = goals(undefined, { type: LOAD_GOALS, payload: ['jen', 'char', 'mike'] });
  expect(state.goals).toEqual(['jen', 'char', 'mike']);
}
)