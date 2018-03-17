const initialState = {
    count: 0,
    items: []
};
export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_LIST':
            const items = [
                {
                    id: 1,
                    text: 'sdsadsdsd'
                }
            ];
            return Object.assign({}, state, {items: items});

        case 'UPDATE_LIST':
            let item = state.items[0];
            item.text = action.text;
            return Object.assign({}, state, {items: [item]});

        case 'ADD_LIST_ITEM':
            let itemList = state.items;
            itemList.push(action.listItem);
            return Object.assign({}, state, {items: itemList});
        default:
            return state
    }
}