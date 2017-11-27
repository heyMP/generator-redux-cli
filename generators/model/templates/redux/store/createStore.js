// import { createStore, combineReducers, applyMiddleware } from "redux";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createMiddleware, History, match, navigate, reducer, route } from 'redux-routing';
import { default as thunkMiddleware } from 'redux-thunk';
import * as reducers from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const historyMiddleware = createMiddleware(History);

function createReducer() {
    return combineReducers(reducers);
}

export const store = createStore(createReducer(), composeEnhancers(
    applyMiddleware(historyMiddleware, thunkMiddleware),
));