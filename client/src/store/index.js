import { createStore as create, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './reducers/reducer';
import rootSega from './sega';

const segaMiddleware = createSagaMiddleware();
const appEnv = process.env.REACT_APP_ENV || 'dev';



let store;

if (appEnv !== 'production') {
    store = create(reducer,
        composeWithDevTools(
            applyMiddleware(
                logger,
                thunk,
                segaMiddleware
            )
        )
    )
} else {
    store = create(reducer,
        applyMiddleware(
            thunk,
            segaMiddleware
        )
    )
}

export const createStore = () => {
    segaMiddleware.run(rootSega);
    return store;
};