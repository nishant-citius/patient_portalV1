import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function InactiveUsersReducer(state = appState, action) {
  if (action.type === actions.GET_INACTIVE_USERS) {
    return {
      userRequests: action.payload.inactiveUserCount,
      inactiveUsers: action.payload.inactiveUsers,
    };
  }

  return state;
}
