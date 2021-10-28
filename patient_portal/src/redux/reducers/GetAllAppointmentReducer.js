import appState from "../appState";
import * as actions from "../actions/userActions";

export function GetAllAppointmentReducer(state = appState, action) {
  if (action.type === actions.GET_APPOINTMENT_DETAILS) {
    return {
      globalmessage: action.payload.globalmessage,
      appointmentsDetails: action.payload.appointmentsDetails,
    };
  }

  return state;
}
