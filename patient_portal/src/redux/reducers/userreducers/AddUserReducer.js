import appState from "../../appState";
import * as actions from "../../actions/userActions";

function AddUserReducer(state = appState, action) {
  if (action.type === actions.ADD_USER) {
    return {
      globalmessage: action.payload.globalmessage,
      users: action.payload.users,
    };
  }

  return state;
}

export { AddUserReducer };
