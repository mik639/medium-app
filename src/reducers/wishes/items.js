export default function (state = [], action) {
    switch (action.type) {
        case 'ADD_WISH_ITEM':
            return [...state, action.payload];

        case 'REMOVE_WISH_ITEM':
            return state.filter(item => item.id !== action.payload);

        default:
            return state;
    }
}