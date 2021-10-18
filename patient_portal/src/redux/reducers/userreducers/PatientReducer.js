import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function PatientReducer(state = appState, action) {
  if (action.type === actions.PATIENTS) {
    return {
      globalmessage: action.payload.globalmessage,
      patients: action.payload.patients,
    };
  }

  return state;
}
