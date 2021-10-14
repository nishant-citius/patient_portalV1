// import appState from "./appState";
import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { DemographicsReducer } from "./reducers/Demographicsreducer";
import Immunizationreducer from "./reducers/Immunizationreducer";
import { LoginReducer } from "./reducers/loginReducer";
import { MedicationandAllergiesReducer } from "./reducers/MedicationandAllergiesreducer";
import { RegisterReducer } from "./reducers/RegisterReducer";
// import { UsersReducer } from "./reducers/userReducer";
import { PhysicianReducer } from "./reducers/PhysicianReducer";
// import { UpdateReducer } from "./reducers/UpdateReducer";
import { AddUserReducer } from "./reducers/AddUserReducer";
import { GetAllUsersReducer } from "./reducers/GetAllUsersReducers";

/** combine reducers*/
let rootReducer = combineReducers({
  register: RegisterReducer,
  login: LoginReducer,
  demographics: DemographicsReducer,
  immunization: Immunizationreducer,
  medication_allergies: MedicationandAllergiesReducer,
  // update: UpdateReducer,
  physicians: PhysicianReducer,
  adduser: AddUserReducer,
  getallusers: GetAllUsersReducer,
});

/**create store  */
let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
