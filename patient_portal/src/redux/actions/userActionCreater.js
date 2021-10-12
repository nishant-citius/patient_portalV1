import * as actions from "./userActions";
import { userService } from "../../services/register_user_service";
import { useHistory } from "react-router";

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
export function AddDemographicsAsync(user) {
  return (dispatch) => {
    userService.Addpatientdemographics(user).then(
      (response) => {
        dispatch({ type: actions.ADD_DEMOGRAPHICS, newuser: user });
        if (response.status === 201) {
          alert(`Demographics Added for ${user.fName} ${user.lName}`);
        }
      },
      (error) => {
        return;
      }
    );
  };
}
export function AddImmunizationsAsync(user) {
  return (dispatch) => {
    userService.Addpatientimmunization(user).then(
      (response) => {
        dispatch({ type: actions.ADD_IMMUNIZATION, newuser: user });
      },
      (error) => {
        return;
      }
    );
  };
}

export function AddMedicationAndAllergiesAsync(user) {
  return (dispatch) => {
    userService.Addmedicationandallergies(user).then(
      (response) => {
        dispatch({ type: actions.ADD_MEDICATIONANDALLERGIES, newuser: user });
      },
      (error) => {
        return;
      }
    );
  };
}

export function loginUser() {
  return {
    type: actions.LOGIN_USER,
  };
}

export function logoutUser() {
  return {
    type: actions.LOGOUT_USER,
  };
}
