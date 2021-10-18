import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function GetAllUsersReducer(state = appState, action) {
  if (action.type === actions.GET_ALL_USERS) {
    return {
      globalmessage: action.payload.globalmessage,
      users: action.payload.users,
    };
  }

  return state;
}
