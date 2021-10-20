import appState from "../../appState";
import * as actions from "../../actions/userActions";

function UserRequestReducer(state = appState, action) {
  if (action.type === actions.ADD_USER_REQUEST) {
    return {
      statusCode: action.payload.statusCode,
    };
  }

  return state;
}

export { UserRequestReducer };
