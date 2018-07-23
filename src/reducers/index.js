import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import listReducer from "./list";
import footerReducer from "./footer";
import wishList from "./wishes";
import items from "./items";
import todo from "./todo/todo";

export const rootReducer = combineReducers({
  todo,
  router: routerReducer
});
