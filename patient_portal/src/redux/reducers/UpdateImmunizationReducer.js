import appState from "../appState";
import * as actions from "../actions/userActions";

export function UpdateImmunizationReducer(state = appState, action) {
  if (action.type === actions.UPDATE_PATIENT_IMMUNIZATION) {
    return {
      ...state,
      globalmessage: action.payload.globalmessage,
    };
  }

  return state;
}
