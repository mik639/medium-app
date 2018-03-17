export default function (state = 'image', action) {
    switch (action.type) {
        case 'SET_WISH_TAB':
            return action.payload;
        default:
            return state;
    }
}