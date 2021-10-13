import appState from "../appState";
import * as actions from "../actions/userActions";

function LoginReducer(state = appState , action){
    if(action.type === action.LOGIN || action.type ===action .LOGOUT){
        return {
            globalmessage: action.payload.globalmessage,
            isLoggedIn: action.payload.isLoggedIn,
            role: action.payload.role,
            authToken: action.payload.authToken,
        };
    }return state;

}
export {LoginReducer} ;
