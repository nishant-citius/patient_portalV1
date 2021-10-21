import appState from "../appState";
import * as actions from "../actions/userActions";


export function MedicationandAllergiesReducer(state = appState, action) {
    if (action.type === actions.ADD_MEDICATIONANDALLERGIES) {
      return {
        globalmessage: action.payload.globalmessage,
        //medication_allergies:state.medication_allergies.concat(action.newuser),
      };
    };

    return state
}