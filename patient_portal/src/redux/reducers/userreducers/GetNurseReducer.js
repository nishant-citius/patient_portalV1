import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function GetNurseReducer(state = appState, action) {
  if (action.type === actions.NURSES) {
    return {
      globalmessage: action.payload.globalmessage,
      nurses: action.payload.nurses,
    };
  }

  return state;
}
