import {combineReducers} from 'redux';
import {routerReducer} from "react-router-redux";
import listReducer from './list';
import footerReducer from './footer';
import wishList from './wishes';
import items from './items';

export const rootReducer = combineReducers({
    listReducer,
    footerReducer,
    wishList,
    items,
    router: routerReducer,
});