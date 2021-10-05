// import appState from "./appState";
import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { UsersReducer } from "./reducers/userReducer";

/** combine reducers*/
let rootReducer = combineReducers({
  users: UsersReducer,
});

/**create store  */
let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
