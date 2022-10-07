import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

import count from './count';

const reducer = combineReducers({ count });

const middleware = applyMiddleware(
    thunkMiddleware
)

const store = createStore(reducer, middleware);

export default store

export * from './count';