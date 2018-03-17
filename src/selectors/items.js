import {createSelector} from 'reselect';
export const makeSelectItemName = () => createSelector(
    (state, props) => state.items.find(item => item.id === props.id).name,
    item => {
        console.log('select');
        
        return `selected ${item}`
    }
);