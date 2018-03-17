const initialState = [{id: '1', name: 'Item 1'}, {id: '2', name: 'Item 2'}, {id: '3', name: 'Item 3'}]
export default function (state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ITEM':
            return [...state, action.payload];
        case 'EDIT_ITEM':
            return state.map(item => item.id === action.payload.id ? action.payload : item);
        default:
            return state;
    }
}