/**
 * Redux Store for Notes App.
 * Stores all the application states
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import createRootReducer from '../reducers/root-reducer';

export const history = createHistory();


/**
 * Initial State of the application
 */
const initialState = {};


const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];


if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
);

export default store;