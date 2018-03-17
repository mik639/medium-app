export default function (state = false, action) {
    switch (action.type) {
        case 'SET_WISH_POPUP':
            return action.payload;
        default:
            return state;
    }
}