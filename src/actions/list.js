export function addListItem(item) {
    return {
        type: 'ADD_LIST_ITEM',
        listItem: item
    }
}

export function getList() {
    return {
        type: 'GET_LIST'
    }
}

export function updateList(text) {
    return {
        type: 'UPDATE_LIST',
        text: text
    }
}