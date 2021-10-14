import * as actions from "./userActions";
import { userService } from "../../services/register_user_service";
import axios from "axios";
import * as URLS from "../../services/url_list";

let config = {
  headers: {
    "Content-Type": "application/json",
  },
};

let authToken = "";

// ********AXIOS INTERCEPTOR********
axios.interceptors.request.use((req) => {
  console.log(`${req.method} ${req.url}`);
  if (req.method === "get" && req.url.endsWith("/users")) {
    //attach auth token to the request header
    req.headers.authorization = `Bearer ${authToken}`;
  }
  return req;
});
//********AXIOS INTERCEPTOR********

export function Register(user) {
  let payload = {
    globalmessage: "",
    statusCode: 200,
  };
  return (dispatch) => {
    axios.post(URLS.REGISTER_USER, JSON.stringify(user), config).then(
      (response) => {
        payload.globalmessage = `Email Id: ${user.email} registered successfully`;

        dispatch({ type: actions.REGISTER, payload: payload });
      },
      (error) => {
        payload.globalmessage = `REGISTRATION ERROR: ${error.response.data}`;
        payload.statusCode = 400;
        dispatch({ type: actions.REGISTER, payload: payload });
      }
    );
  };
}

export function Login(user) {
  let payload = {
    globalmessage: "",
    isLoggedIn: false,
    role: "",
    authToken: "",
    loggedUserInfo: {},
  };
  return (dispatch) => {
    axios.post(URLS.LOGIN_USER, JSON.stringify(user), config).then(
      (response) => {
        payload.globalmessage = `User with email id ${user.email} loggedin successfully`;
        payload.isLoggedIn = true;
        payload.role = response.data.user.role;
        payload.authToken = response.data.accessToken;
        payload.loggedUserInfo = response.data.user;
        dispatch({ type: actions.LOGIN, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.isLoggedIn = false;
        payload.authToken = "";
        payload.role = "";
        dispatch({ type: actions.LOGIN, payload: payload });
      }
    );
  };
}

export function Logout() {
  let payload = {
    globalmessage: "LOGGED OUT",
    isLoggedIn: false,
    role: "",
    authToken: "",
  };
  return (dispatch) => {
    return dispatch({ type: actions.LOGOUT, payload: payload });
  };
}

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

export function AddUser(user) {
  let payload = {
    globalmessage: "",
  };
  return (dispatch) => {
    axios.post(URLS.ADD_USER, JSON.stringify(user), config).then(
      (response) => {
        console.log(response);
        payload.globalmessage = `New User Added successfully`;
        dispatch({ type: actions.ADD_USER, payload: payload });
      },
      (error) => {
        payload.globalmessage = `ERROR: ${error.response.data}`;
        dispatch({ type: actions.ADD_USER, payload: payload });
      }
    );
  };
}

export function EditUser(userId, upadatedData) {
  let payload = {
    globalmessage: "",
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios
      .put(`${URLS.USER} ${userId}`, JSON.stringify(upadatedData), config)
      .then(
        (response) => {
          console.log(response);
          payload.globalmessage = ` User Updated successfully`;
          dispatch({ type: actions.UPDATE_USER, payload: payload });
        },
        (error) => {
          payload.globalmessage = `ERROR: ${error.response.data}`;
          dispatch({ type: actions.UPDATE_USER, payload: payload });
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
        if (response.status === 201) {
          alert(`Immunization Added for ${user.fName} ${user.lName}`);
        }
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

export function GetAllUserData() {
  let payload = {
    users: [],
    globalmessage: "",
  };

  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.get(URLS.USER).then(
      (response) => {
        payload.globalmessage = `User data retrieved successfully. Count: ${response.data.length}`;
        payload.users = response.data;
        dispatch({ type: actions.GET_ALL_USERS, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.users = [];
        dispatch({ type: actions.GET_ALL_USERS, payload: payload });
      }
    );
  };
}
