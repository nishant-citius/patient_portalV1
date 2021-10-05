import * as actions from "./userActions";
import { userService } from "../../services/register_user_service";

export function GetAllUsersAsync() {
  return (dispatch) => {
    userService.GetAllUsers().then(
      (response) => {
        dispatch({ type: actions.GET_USERS, users: response.data });
      },
      (error) => {
        return;
      }
    );
  };
}

export function AddUserAsync(user) {
  return (dispatch) => {
    userService.AddUser(user).then(
      (response) => {
        // if (response.status === "201") {
        //   alert("You Registered Successfully..");
        // } else {
        //   alert("Something Went wrong..");
        // }
        dispatch({ type: actions.ADD_USER, newuser: user });
      },
      (error) => {
        return;
      }
    );
  };
}