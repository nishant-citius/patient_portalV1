import appState from "../appState";
import * as actions from "../actions/userActions";

function LoginReducer(state = appState , action){
    if (action.type === actions.LOGIN || action.type === actions.LOGOUT) {
      return {
        globalmessage: action.payload.globalmessage,
        isLoggedIn: action.payload.isLoggedIn,
        role: action.payload.role,
        authToken: action.payload.authToken,
        loggedUserInfo: action.payload.loggedUserInfo,
      };
    }

    return state;

}
export {LoginReducer} ;
