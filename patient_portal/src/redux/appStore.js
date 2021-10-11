// import appState from "./appState";
import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { DemographicsReducer } from "./reducers/Demographicsreducer";
import  Immunizationreducer  from "./reducers/Immunizationreducer";
import { UsersReducer } from "./reducers/userReducer";

/** combine reducers*/
let rootReducer = combineReducers({
  users: UsersReducer,
  demographics: DemographicsReducer,
  immunization: Immunizationreducer,
});

/**create store  */
let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
