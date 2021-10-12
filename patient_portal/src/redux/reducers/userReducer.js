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

  if (action.type === actions.LOGIN_USER) {
    let isLoggedIn = false;
    return {
      ...state,
      isLoggedIn: isLoggedIn,
    };
  }

  if (action.type === actions.LOGOUT_USER) {
    return {
      ...state,
      isLoggedIn: false,
    };
  }

  /**default case */
  return state;
}
