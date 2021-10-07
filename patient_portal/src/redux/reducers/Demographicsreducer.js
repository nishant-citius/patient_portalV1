import appState from "../appState";
import * as actions from "../actions/userActions";

export function DemographicsReducer(state = appState, action) {
    if (action.type === actions.ADD_DEMOGRAPHICS) {
      return {
        ...state,
        demographics: state.demographics.concat(action.newuser),
      };
    };

    return state
}