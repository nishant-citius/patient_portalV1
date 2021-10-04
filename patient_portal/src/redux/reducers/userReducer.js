import appState from "../appState";
import * as actions from "../actions/userActions";

export function UsersReducer(state = appState, action) {
  if (action.type === actions.ADD_USER) {
    return {
      ...state,
      users: state.users.concat(action.newuser),
    };
  }

  if (action.type === actions.GET_USERS) {
    return {
      ...state,
      users: action.users,
    };
  }

  /**default case */
  return state;
}
