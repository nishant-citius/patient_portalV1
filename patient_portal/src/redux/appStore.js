import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { DemographicsReducer } from "./reducers/Demographicsreducer";
import Immunizationreducer from "./reducers/Immunizationreducer";
import VitalsReducer from "./reducers/Vitalsreducer";
import { LoginReducer } from "./reducers/loginReducer";
import { MedicationandAllergiesReducer } from "./reducers/MedicationandAllergiesreducer";
import { RegisterReducer } from "./reducers/RegisterReducer";
import { PhysicianReducer } from "./reducers/userreducers/PhysicianReducer";
import { AddUserReducer } from "./reducers/userreducers/AddUserReducer";
import { GetAllUsersReducer } from "./reducers/userreducers/GetAllUsersReducers";
import { EditUserReducer } from "./reducers/userreducers/EditUserReducer";
import { PatientReducer } from "./reducers/userreducers/PatientReducer";
import { UserDetailsReducer } from "./reducers/userreducers/UserDetailsReducer";
import { updateprofilepicreducer } from "./reducers/updateprofilepicreducer";
import { InactiveUsersReducer } from "./reducers/userreducers/InactiveUsersReducer";
import { PatientDemographicsReducer } from "./reducers/PatientDemographicsReducer";
import { GetNurseReducer } from "./reducers/userreducers/GetNurseReducer";
import { PatientImmunizationReducer } from "./reducers/PatientImmunizationReducer";
import { GetImmunizationReducer } from "./reducers/userreducers/GetImmunizationReducer";
import { SpecialityPhysicianReducer } from "./reducers/userreducers/SpecialityPhysicianReducer";
import { GetAllAppointmentReducer } from "./reducers/GetAllAppointmentReducer";
import { DeleteUserReducer } from "./reducers/userreducers/DeleteUserReducer";
import { GetVitalsReducer } from "./reducers/GetVitalReducer";
import { UpdateImmunizationReducer } from "./reducers/UpdateImmunizationReducer";
import { PatientMedicationAllergyReducer } from "./reducers/PatientMedicationAllergyReducer";
import { GetAllDemographicsReducer } from "./reducers/userreducers/GetAllDemographicsReducer";

/** combine reducers*/
let rootReducer = combineReducers({
  register: RegisterReducer,
  login: LoginReducer,
  demographics: DemographicsReducer,
  immunization: Immunizationreducer,
  vitals: VitalsReducer,
  getPatientvitals: GetVitalsReducer,
  medication_allergies: MedicationandAllergiesReducer,
  physicians: PhysicianReducer,
  adduser: AddUserReducer,
  getallusers: GetAllUsersReducer,
  updateusers: EditUserReducer,
  patients: PatientReducer,
  nurses: GetNurseReducer,
  getalldemographics: GetAllDemographicsReducer,
  immunizations: GetImmunizationReducer,
  userDetails: UserDetailsReducer,
  updateprofile: updateprofilepicreducer,
  inactiveUsers: InactiveUsersReducer,
  patientDemographics: PatientDemographicsReducer,
  patientImmunization: PatientImmunizationReducer,
  specilizedPhysicians: SpecialityPhysicianReducer,
  appointmentsDetails: GetAllAppointmentReducer,
  deleteUser: DeleteUserReducer,
  updateImmunization: UpdateImmunizationReducer,
  patientMedicationAllergy: PatientMedicationAllergyReducer,
});

/**create store  */
let appStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default appStore;
