// import appState from "./appState";
import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { DemographicsReducer } from "./reducers/Demographicsreducer";
import { UsersReducer } from "./reducers/userReducer";
import { MedicationandAllergiesReducer } from "./reducers/MedicationandAllergiesreducer";

/** combine reducers*/
let rootReducer = combineReducers({
  users: UsersReducer,
  demographics: DemographicsReducer,
  medication_allergies: MedicationandAllergiesReducer,
  isLoggedIn: UsersReducer,
});

/**create store  */
let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
