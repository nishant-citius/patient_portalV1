// import appState from "./appState";
import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { DemographicsReducer } from "./reducers/Demographicsreducer";
import Immunizationreducer from "./reducers/Immunizationreducer";
import { LoginReducer } from "./reducers/loginReducer";
// import { UsersReducer } from "./reducers/userReducer";
import { MedicationandAllergiesReducer } from "./reducers/MedicationandAllergiesreducer";
import { RegisterReducer } from "./reducers/RegisterReducer";
import { AddUserReducer } from "./reducers/userreducers/AddUserReducer";
import { GetAllUsersReducer } from "./reducers/userreducers/GetAllUsersReducers";
import { EditUserReducer } from "./reducers/userreducers/EditUserReducer";

/** combine reducers*/
let rootReducer = combineReducers({
  register: RegisterReducer,
  login: LoginReducer,
  demographics: DemographicsReducer,
  immunization: Immunizationreducer,
  medication_allergies: MedicationandAllergiesReducer,
  adduser: AddUserReducer,
  getallusers: GetAllUsersReducer,
  updateusers: EditUserReducer,
});

/**create store  */
let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
