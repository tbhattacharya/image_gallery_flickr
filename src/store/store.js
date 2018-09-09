import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers/reducers';

export const store = createStore(
    reducer,
    applyMiddleware(createSagaMiddleware())
);