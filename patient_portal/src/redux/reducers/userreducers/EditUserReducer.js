import appState from "../../appState";
import * as actions from "../../actions/userActions";

function EditUserReducer(state = appState, action) {
  if (action.type === actions.UPDATE_USER) {
    return {
      globalmessage: action.payload.globalmessage,
    };
  }

  return state;
}

export { EditUserReducer };
