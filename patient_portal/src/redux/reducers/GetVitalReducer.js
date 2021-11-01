import appState from "../appState";
import * as actions from "../actions/userActions";

export function GetVitalsReducer(state = appState, action) {
  if (action.type === actions.GET_PATIENT_VITALS) {
    return {
      globalmessage: action.payload.globalmessage,
      getPatientvitals: action.payload.userVitals,
    };
  }

  return state;
}
