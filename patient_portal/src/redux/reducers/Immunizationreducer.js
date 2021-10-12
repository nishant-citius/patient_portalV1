import appState from "../appState";
import * as actions from "../actions/userActions";

 function ImmunizationReducer(state = appState, action) {
    if (action.type === actions.ADD_IMMUNIZATION) {
      return {
        ...state,
        immunization: state.immunization.concat(action.newuser),
      };
    };

    return state
}
export default ImmunizationReducer