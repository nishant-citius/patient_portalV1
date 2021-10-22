import appState from "../appState";
import * as actions from "../actions/userActions";

export function PatientDemographicsReducer(state = appState, action) {
  if (action.type === actions.GET_PATIENT_DEMOGRAPHICS) {
    return {
      globalmessage: action.payload.globalmessage,
      patientDemographics: action.payload.userDemographics,
    };
  }

  return state;
}
