import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function GetImmunizationReducer(state = appState, action) {
  if (action.type === actions.GET_ALL_IMMUNIZATION) {
    return {
      globalmessage: action.payload.globalmessage,
      immunizations: action.payload.immunizations,
    };
  }

  return state;
}
