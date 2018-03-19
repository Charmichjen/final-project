import { goals, ADD_GOAL, DELETE_GOAL, COMPLETE_GOAL } from './reducers';


it('default state of an empty array', () => {
  const state = goals(undefined, {});
  expect(state).toEqual([]);
});

it('adds a goal', () => {
  const state = goals([], { 
    type: ADD_GOAL, 
    payload: { name: 'goal' }
  });
  expect(state).toEqual([{ name: 'goal' }]);
});

it ('deletes a goal', () => {
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

it('completes a goal', () => {
  const state = goals(futureGoals, { 
    type: COMPLETE_GOAL,
    payload: crushedGoal
  });
  expect(state).toEqual([crushedGoal]);
});