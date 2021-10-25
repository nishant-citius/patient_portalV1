import appState from "../appState";
import * as actions from "../actions/userActions";

export function PatientImmunizationReducer(state = appState, action) {
  if (action.type === actions.GET_PATIENT_IMMUNIZATION) {
    return {
      globalmessage: action.payload.globalmessage,
      patientImmunization: action.payload.userImmunization,
    };
  }

  return state;
}
