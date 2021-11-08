import appState from "../../appState";
import * as actions from "../../actions/userActions";

export function PendingAppointmentsReducer(state = appState, action) {
  if (action.type === actions.GET_PENDING_APPOINTMENT) {
    return {
      ...state,
      pendingAppointmentCount: action.payload.pendingAppointmentCount,
      pendingAppointments: action.payload.pendingAppointments,
      // inactiveUsers: state.inactiveUsers.concat(action.payload.inactiveUsers),
    };
  }

  return state;
}
