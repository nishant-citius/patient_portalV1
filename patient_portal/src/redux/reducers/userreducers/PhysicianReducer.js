import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function PhysicianReducer(state = appState, action) {
  if (action.type === actions.PHYSICIANS) {
    return {
      globalmessage: action.payload.globalmessage,
      physicians: action.payload.physicians,
    };
  }
  return state;
}
