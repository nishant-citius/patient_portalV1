import appState from "../appState";
import * as actions from "../actions/userActions";

export function UpdateDemographicsReducer(state = appState, action) {
  if (action.type === actions.UPDATE_PATIENT_DEMOGRAPHICS) {
    return {
      ...state,
      globalmessage: action.payload.globalmessage,
    };
  }

  return state;
}
