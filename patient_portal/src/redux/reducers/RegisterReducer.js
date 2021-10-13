import appState from "../appState";
import * as actions from "../actions/userActions";

export function RegisterReducer(state = appState, action) {
  if (action.type === actions.REGISTER) {
    return {
      globalmessage: action.payload.globalmessage,
      statusCode: action.payload.statusCode,
    };
  }

  return state;
}
