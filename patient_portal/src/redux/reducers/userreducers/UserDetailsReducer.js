import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function UserDetailsReducer(state = appState, action) {
  if (action.type === actions.GET_USER) {
    return {
      globalmessage: action.payload.globalmessage,
      userDetails: action.payload.userDetails,
    };
  }

  return state;
}
