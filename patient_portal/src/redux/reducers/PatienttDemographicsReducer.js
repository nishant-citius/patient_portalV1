import appState from "../appState";
import * as actions from "../actions/userActions";

export function PatientDemographicsReducer(state = appState, action) {
  if (action.type === actions.GET_DEMOGRAPHICS) {
    return {
      globalmessage: action.payload.globalmessage,
      userDemographics: action.payload.userDemographics,
      statusCode: action.payload.statusCode,
    };
  }

  return state;
}
