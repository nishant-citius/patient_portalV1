import appState from "../appState";
import * as actions from "../actions/userActions";

function DietPlanReducer(state = appState, action) {
  if (action.type === actions.ADD_DIETPLAN) {
    return {
      ...state,
      globalmessage: action.payload.globalmessage,
      statusCode: action.payload.statusCode,
      dietplan: state.dietplan.concat(action.newuser),
    };
  }

  return state;
}
export default DietPlanReducer;
