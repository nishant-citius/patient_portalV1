import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function SpecialityPhysicianReducer(state = appState, action) {
  if (action.type === actions.SPECIALIZED_PHYSICIANS) {
    return {
      specialisedPhysicians: action.payload.sepecializedPhysicians,
    };
  }

  return state;
}
