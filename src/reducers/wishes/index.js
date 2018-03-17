import {
    combineReducers
} from 'redux';
import items from './items';
import popup from './popup';
import tab from './tab';

export default combineReducers({
    items,
    popup,
    tab
});