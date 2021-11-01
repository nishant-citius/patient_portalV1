import appState from "../appState";
import * as actions from "../actions/userActions";

export function PatientMedicationAllergyReducer(state = appState, action) {
  if (action.type === actions.GET_PATIENT_MEDICATION_ALLERGY) {
    return {
      globalmessage: action.payload.globalmessage,
      patientMedicationAllergy: action.payload.userMedicationAllergy,
    };
  }

  return state;
}
