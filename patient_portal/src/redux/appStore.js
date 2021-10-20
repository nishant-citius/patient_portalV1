import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Immunizationreducer from "./reducers/Immunizationreducer";
import { LoginReducer } from "./reducers/loginReducer";
import { MedicationandAllergiesReducer } from "./reducers/MedicationandAllergiesreducer";
import { RegisterReducer } from "./reducers/RegisterReducer";
import { PhysicianReducer } from "./reducers/userreducers/PhysicianReducer";
import { AddUserReducer } from "./reducers/userreducers/AddUserReducer";
import { GetAllUsersReducer } from "./reducers/userreducers/GetAllUsersReducers";
import { EditUserReducer } from "./reducers/userreducers/EditUserReducer";
import { PatientReducer } from "./reducers/userreducers/PatientReducer";
import { UserDetailsReducer } from "./reducers/userreducers/UserDetailsReducer";
import {updateprofilepicreducer} from "./reducers/updateprofilepicreducer";
import { DemographicsReducer } from "./reducers/Demographicsreducer";

/** combine reducers*/
let rootReducer = combineReducers({
  register: RegisterReducer,
  login: LoginReducer,
  demographics: DemographicsReducer,
  immunization: Immunizationreducer,
  medication_allergies: MedicationandAllergiesReducer,
  physicians: PhysicianReducer,
  adduser: AddUserReducer,
  getallusers: GetAllUsersReducer,
  updateusers: EditUserReducer,
  patients: PatientReducer,
  userDetails: UserDetailsReducer,
  updateprofile: updateprofilepicreducer
});

/**create store  */
let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
