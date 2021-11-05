import appState from "../appState";
import * as actions from "../actions/userActions";

export function UpdateMedicationAndAllergiesReducer(state = appState, action) {
  if (action.type === actions.UPDATE_PATIENT_MEDICATIONANDALLERGIES) {
    return {
      ...state,
      globalmessage: action.payload.globalmessage,
    };
  }

  return state;
}
