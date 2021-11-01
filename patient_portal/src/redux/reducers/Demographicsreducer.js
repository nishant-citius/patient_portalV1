import appState from "../appState";
import * as actions from "../actions/userActions";

export function DemographicsReducer(state = appState, action) {
  if (action.type === actions.ADD_DEMOGRAPHICS) {
    return {
      ...state,
      globalmessage: action.payload.globalmessage,
      statusCode: action.payload.statusCode,
      // demographics: state.demographics.concat(action.newuser),
      demographics: action.payload.demographics,
    };
  }

  return state;
}
