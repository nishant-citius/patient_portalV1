import appState from "../appState";
import * as actions from "../actions/userActions";

function VitalsReducer(state = appState, action) {
  if (action.type === actions.ADD_VITALS) {
    return {
      ...state,
      globalmessage: action.payload.globalmessage,
      statusCode: action.payload.statusCode,
      vitals: state.vitals.concat(action.newuser),
    };
  }

  return state;
}
export default VitalsReducer;
