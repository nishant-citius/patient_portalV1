import appState from "../appState";
import * as actions from "../actions/userActions";

export function updateprofilepicreducer(state = appState, action) {
    if (action.type === actions.UPDATE_PROFILEPIC) {
      return {
        // ...state,
        globalmessage: action.payload.globalmessage,
        // statusCode: action.payload.statusCode,
      };
    };
    return state
}