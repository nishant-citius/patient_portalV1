import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function GetAllDemographicsReducer(state = appState, action) {
  if (action.type === actions.GET_DEMOGRAPHICS) {
    return {
      globalmessage: action.payload.globalmessage,
      demographics: action.payload.demographics,
    };
  }

  return state;
}
