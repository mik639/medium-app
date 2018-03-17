import {createStore, applyMiddleware, compose} from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import {rootReducer} from '../reducers';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';

export const history = createHistory({
    basename: '/medium-app'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(routerMiddleware(history))));
}