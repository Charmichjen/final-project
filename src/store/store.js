import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { loading } from '../components/app/reducers';
import { user } from '../components/auth/reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { goals } from '../components/dashboard/reducers';
import { sharedGoals } from '../components/explore/reducers';
import { userProfile } from '../components/profile/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  loading,
  user,
  goals,
  sharedGoals,
  userProfile
});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;
