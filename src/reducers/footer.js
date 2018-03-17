const initialState = {
    lastItem: ''
};
export default function footerReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_LIST_ITEM':
            return Object.assign({}, state, {lastItem: action.listItem});
        default:
            return state
    }
}