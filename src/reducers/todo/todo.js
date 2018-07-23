import { createActions, handleActions } from "redux-actions";
import createID from "nanoid";
export const { add, remove, done } = createActions({
  TODO: {
    ADD: todo => ({ id: createID(), text: todo, done: false }),
    REMOVE: id => id,
    DONE: id => id
  }
}).todo;

const defaultState = {
  list: []
};

export default handleActions(
  {
    [add]: (state, { payload }) => ({ list: [...state.list, payload] }),
    [remove]: (state, { payload }) => ({
      list: state.list.filter(({ id }) => id !== payload)
    }),
    [done]: (state, { payload }) => ({
      list: state.list.map(
        todo => (todo.id === payload ? { ...todo, done: true } : todo)
      )
    })
  },
  defaultState
);
