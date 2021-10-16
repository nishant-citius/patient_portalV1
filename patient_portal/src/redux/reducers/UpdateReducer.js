import appState from "../appState";
import * as actions from "../actions/userActions";

export function UpdateReducer(state = appState, action) {
  if (action.type === actions.UPDATE) {
    return {
      globalmessage: action.payload.globalmessage,
    };
  }

  return state;
}
