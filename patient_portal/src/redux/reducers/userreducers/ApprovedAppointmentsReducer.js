import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function ApprovedAppointmentsReducer(state = appState, action) {
  if (action.type === actions.GET_APPROVED_APPOINTMENT) {
    return {
      ...state,
      approvedAppointmentCount: action.payload.approvedAppointmentCount,
      approvedAppointments: action.payload.approvedAppointments,
      // inactiveUsers: state.inactiveUsers.concat(action.payload.inactiveUsers),
    };
  }

  return state;
}
