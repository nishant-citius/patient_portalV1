import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function DeleteUserReducer(state = appState, action) {
  if (action.type === actions.DELETE_USER) {
    return {
      ...state,
      users: state.users,
    };
  }

  return state;
}
