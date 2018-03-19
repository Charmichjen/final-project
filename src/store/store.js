import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { loading } from '../components/app/reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  loading,
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
