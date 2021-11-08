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
  if (
    req.method === "get" &&
    (req.url.endsWith("/users") ||
      req.url.endsWith("physician") ||
      req.url.endsWith("patient") ||
      req.url.endsWith("/immunization") ||
      req.url.endsWith(req.url))
  ) {
    //attach auth token to the request header
    req.headers.authorization = `Bearer ${authToken}`;
  }
  if (
    (req.method === "post" && req.url.endsWith("/demographics")) ||
    req.url.endsWith("/requests")
  ) {
    //attach auth token to the request header
    req.headers.authorization = `Bearer ${authToken}`;
  }
  if (req.method === "put" && req.url.indexOf("/users/")) {
    //attach auth token to the request header
    req.headers.authorization = `Bearer ${authToken}`;
  }
  if (
    req.method === "post" &&
    (req.url.endsWith("/immunization") || req.url.indexOf("/immunization"))
  ) {
    //attach auth token to the request header
    req.headers.authorization = `Bearer ${authToken}`;
  }
  if (req.method === "post" && req.url.endsWith("/patientvitals")) {
    //attach auth token to the request header
    req.headers.authorization = `Bearer ${authToken}`;
  }
  if (req.method === "post" && req.url.endsWith("/patientdietplan")) {
    //attach auth token to the request header
    req.headers.authorization = `Bearer ${authToken}`;
  }
  if (req.method === "put" && req.url.indexOf("/users/")) {
    req.headers.authorization = `Bearer ${authToken}`;
  }
  if (req.method === "post" && req.url.endsWith("/medic_allergy")) {
    //attach auth token to the request header
    req.headers.authorization = `Bearer ${authToken}`;
  }
  if (req.method === "delete" && req.url.endsWith(req.url)) {
    //attach auth token to the request header
    req.headers.authorization = `Bearer ${authToken}`;
  }
  if (req.method === "put" && req.url.indexOf("/demographics/")) {
    //attach auth token to the request header
    req.headers.authorization = `Bearer ${authToken}`;
  }
  return req;
});
// //********AXIOS INTERCEPTOR********

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

export function GetAllUserData() {
  let payload = {
    users: [],
    globalmessage: "",
  };

  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.get(URLS.ALL_USERS).then(
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

export function GetAllPhysicianData() {
  let payload = {
    physicians: [],
    globalmessage: "",
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;

    axios.get(URLS.GET_PHYSICIANS).then(
      (response) => {
        payload.globalmessage = `Physician data retrieved successfully. Count: ${response.data.length}`;
        payload.physicians = response.data;
        dispatch({ type: actions.PHYSICIANS, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.physicians = [];
        dispatch({ type: actions.PHYSICIANS, payload: payload });
      }
    );
  };
}

export function GetAllNurseData() {
  let payload = {
    nurses: [],
    globalmessage: "",
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;

    axios.get(URLS.GET_NURSE).then(
      (response) => {
        payload.globalmessage = `Nurse data retrieved successfully. Count: ${response.data.length}`;
        payload.nurses = response.data;
        dispatch({ type: actions.NURSES, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.nurses = [];
        dispatch({ type: actions.NURSES, payload: payload });
      }
    );
  };
}

export function GetAllImmunizationData() {
  let payload = {
    immunizations: [],
    globalmessage: "",
  };

  return (dispatch, getState) => {
    authToken = getState().login.authToken;

    axios.get(URLS.IMMUNIZATION).then(
      (response) => {
        payload.globalmessage = `Immunization data retrieved successfully. Count: ${response.data.length}`;
        payload.immunizations = response.data;
        dispatch({ type: actions.GET_ALL_IMMUNIZATION, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.immunizations = [];
        dispatch({ type: actions.GET_ALL_IMMUNIZATION, payload: payload });
      }
    );
  };
}

export function GetAllDemographicsData() {
  let payload = {
    demographics: [],
    globalmessage: "",
  };

  return (dispatch, getState) => {
    authToken = getState().login.authToken;

    axios.get(URLS.GET_DEMOGRAPHICS).then(
      (response) => {
        payload.globalmessage = `Demographics data retrieved successfully. Count: ${response.data.length}`;
        payload.demographics = response.data;
        dispatch({ type: actions.GET_DEMOGRAPHICS, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.demographics = [];
        dispatch({ type: actions.GET_DEMOGRAPHICS, payload: payload });
      }
    );
  };
}

export function GetAllPatientsData() {
  let payload = {
    patients: [],
    globalmessage: "",
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;

    axios.get(URLS.GET_PATIENTS).then(
      (response) => {
        payload.globalmessage = `Patients data retrieved successfully. Count: ${response.data.length}`;
        payload.patients = response.data;
        dispatch({ type: actions.PATIENTS, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.patients = [];
        dispatch({ type: actions.PATIENTS, payload: payload });
      }
    );
  };
}

export function GetUserDetails(userId) {
  let payload = {
    globalmessage: "",
    userDetails: {},
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.get(`${URLS.GET_USER_DETAILS}/${userId}`).then(
      (response) => {
        payload.globalmessage = `User Details Retrieved...`;
        payload.userDetails = response.data;
        dispatch({ type: actions.GET_USER, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.userDetails = {};
        dispatch({ type: actions.GET_USER, payload: payload });
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
      .put(`${URLS.USER}${userId}`, JSON.stringify(upadatedData), config)
      .then(
        (response) => {
          payload.globalmessage = `Edit Success`;
          dispatch({ type: actions.UPDATE_USER, payload: payload });
        },
        (error) => {
          payload.globalmessage = `ERROR: ${error.response.data}`;
          dispatch({ type: actions.UPDATE_USER, payload: payload });
        }
      );
  };
}

export function DeleteUser(userId) {
  let payload = {
    globalmessage: "",
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.delete(`${URLS.USER}${userId}`).then(
      (response) => {
        dispatch({ type: actions.DELETE_USER, payload: payload });
      },
      (error) => {
        dispatch({ type: actions.DELETE_USER, payload: payload });
      }
    );
  };
}

export function AddNewUser(user) {
  let payload = {
    globalmessage: "",
    statusCode: 200,
  };
  return (dispatch) => {
    axios.post(URLS.ADD_USER, JSON.stringify(user), config).then(
      (response) => {
        payload.globalmessage = `New User Added successfully`;
        payload.statusCode = response.status;
        dispatch({ type: actions.ADD_USER, payload: payload });
      },
      (error) => {
        payload.globalmessage = `ERROR: ${error.response.data}`;
        payload.statusCode = error;
        dispatch({ type: actions.ADD_USER, payload: payload });
      }
    );
  };
}

export function GetInactiveUsers() {
  let payload = {
    inactiveUsers: [],
    inactiveUserCount: 0,
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;

    axios.get(URLS.INACTIVE_USERS).then(
      (response) => {
        payload.inactiveUsers = response.data;
        payload.inactiveUserCount = response.data.length;
        dispatch({ type: actions.GET_INACTIVE_USERS, payload: payload });
      },
      (error) => {
        payload.inactiveUsers = [];
        payload.inactiveUserCount = 0;
        dispatch({ type: actions.GET_INACTIVE_USERS, payload: payload });
      }
    );
  };
}

export function GetApprovedAppointment() {
  let payload = {
    approvedAppointments: [],
    approvedAppointmentCount: 0,
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;

    axios.get(URLS.APPROVED_APPOINTMETS).then(
      (response) => {
        payload.approvedAppointments = response.data;
        payload.approvedAppointmentCount = response.data.length;
        dispatch({ type: actions.GET_APPROVED_APPOINTMENT, payload: payload });
      },
      (error) => {
        payload.approvedAppointments = [];
        payload.approvedAppointmentCount = 0;
        dispatch({ type: actions.GET_APPROVED_APPOINTMENT, payload: payload });
      }
    );
  };
}

export function PhysiciansBySpeiciality(speciality) {
  let payload = {
    globalmessage: "",
    sepecializedPhysicians: [],
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.get(`${URLS.SPECILISED_PHYSICIANS}${speciality}`).then(
      (response) => {
        payload.globalmessage = `Specility`;
        payload.sepecializedPhysicians = response.data;
        dispatch({ type: actions.SPECIALIZED_PHYSICIANS, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.sepecializedPhysicians = [];
        dispatch({ type: actions.SPECIALIZED_PHYSICIANS, payload: payload });
      }
    );
  };
}

export function PhysiciansByName(physicianName) {
  let payload = {
    globalmessage: "",
    sepecializedPhysicians: [],
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.get(`${URLS.SPECILISED_PHYSICIANS}${physicianName}`).then(
      (response) => {
        payload.globalmessage = `Physician By Name`;
        payload.sepecializedPhysicians = response.data;
        dispatch({ type: actions.SPECIALIZED_PHYSICIANS, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.sepecializedPhysicians = [];
        dispatch({ type: actions.SPECIALIZED_PHYSICIANS, payload: payload });
      }
    );
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

export function AddDemographicsAsync(user) {
  let payload = {
    globalmessage: "",
    statusCode: 200,
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.post(URLS.DEMOGRAPHICS, JSON.stringify(user), config).then(
      (response) => {
        payload.globalmessage = `Demographics registered successfully`;
        payload.statusCode = response.status;
        dispatch({ type: actions.ADD_DEMOGRAPHICS, payload: payload });
      },
      (error) => {
        payload.globalmessage = `Demographics ERROR: ${error.response.data}`;
        payload.statusCode = 400;
        dispatch({ type: actions.ADD_DEMOGRAPHICS, payload: payload });
      }
    );
  };
}

export function UpdatePatientImmunization(patientId, upadatedData) {
  let payload = {
    globalmessage: "",
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios
      .put(
        `${URLS.UPDATE_PATIENT_IMMUNIZATION}/${patientId}`,
        JSON.stringify(upadatedData),
        config
      )
      .then(
        (response) => {
          payload.globalmessage = "Immunization Updated...";
          dispatch({
            type: actions.UPDATE_PATIENT_IMMUNIZATION,
            payload: payload,
          });
        },
        (error) => {
          dispatch({
            type: actions.UPDATE_PATIENT_IMMUNIZATION,
            payload: payload,
          });
        }
      );
  };
}

export function AddImmunizationsAsync(user) {
  let payload = {
    globalmessage: "",
    statusCode: 200,
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.post(URLS.IMMUNIZATION, JSON.stringify(user), config).then(
      (response) => {
        payload.globalmessage = `Immunization registered successfully`;
        payload.statusCode = response.status;
        dispatch({ type: actions.ADD_IMMUNIZATION, payload: payload });
      },
      (error) => {
        payload.globalmessage = `Immunization ERROR: ${error.response.data}`;
        payload.statusCode = 400;
        dispatch({ type: actions.ADD_IMMUNIZATION, payload: payload });
      }
    );
  };
}

export function AddVitalsAsync(user) {
  let payload = {
    globalmessage: "",
    statusCode: 200,
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.post(URLS.PATIENT_VITALS, JSON.stringify(user), config).then(
      (response) => {
        payload.globalmessage = `Vitals registered successfully`;
        payload.statusCode = response.status;
        dispatch({ type: actions.ADD_VITALS, payload: payload });
      },
      (error) => {
        payload.globalmessage = `Vitals ERROR: ${error.response.data}`;
        payload.statusCode = 400;
        dispatch({ type: actions.ADD_VITALS, payload: payload });
      }
    );
  };
}

export function AddDietPlanAsync(user) {
  let payload = {
    globalmessage: "",
    statusCode: 200,
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.post(URLS.PATIENT_DIETPLAN, JSON.stringify(user), config).then(
      (response) => {
        payload.globalmessage = `Dietplan registered successfully`;
        payload.statusCode = response.status;
        dispatch({ type: actions.ADD_DIETPLAN, payload: payload });
      },
      (error) => {
        payload.globalmessage = `DietPlan ERROR: ${error.response.data}`;
        payload.statusCode = 400;
        dispatch({ type: actions.ADD_DIETPLAN, payload: payload });
      }
    );
  };
}

export function GetVitals(userId) {
  let payload = {
    globalmessage: "",
    userVitals: {},
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.get(`${URLS.GET_PATIENT_VITALS}${userId}`).then(
      (response) => {
        payload.globalmessage = `Vitals Retrieved...`;
        payload.userVitals = response.data;
        dispatch({ type: actions.GET_PATIENT_VITALS, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.userVitals = {};
        dispatch({ type: actions.GET_PATIENT_VITALS, payload: payload });
      }
    );
  };
}

export function GetDietPlan(userId) {
  let payload = {
    globalmessage: "",
    userDietPlan: {},
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.get(`${URLS.GET_PATIENT_DIETPLAN}${userId}`).then(
      (response) => {
        payload.globalmessage = `DietPlan Retrieved...`;
        payload.userDietPlan = response.data;
        dispatch({ type: actions.GET_PATIENT_DIETPLAN, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.userDietplan = {};
        dispatch({ type: actions.GET_PATIENT_DIETPLAN, payload: payload });
      }
    );
  };
}

export function AddMedicationAndAllergiesAsync(user) {
  let payload = {
    globalmessage: "",
    statusCode: 200,
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.post(URLS.MED_ALLERGIES, JSON.stringify(user), config).then(
      (response) => {
        payload.globalmessage = `Medication And Allegies Submitted successfully`;
        dispatch({
          type: actions.ADD_MEDICATIONANDALLERGIES,
          payload: payload,
        });
      },
      (error) => {
        payload.globalmessage = `Medication and Allergy ERROR: ${error.response.data}`;
        // payload.statusCode = 400;
        dispatch({
          type: actions.ADD_MEDICATIONANDALLERGIES,
          payload: payload,
        });
      }
    );
  };
}
export function UpdateMedicationAndAllergies(patientId, upadatedData) {
  let payload = {
    globalmessage: "",
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios
      .put(
        `${URLS.MED_ALLERGIES}/${patientId}`,
        JSON.stringify(upadatedData),
        config
      )
      .then(
        (response) => {
          payload.globalmessage = "Medcation and alergy is Updated...";
          dispatch({
            type: actions.UPDATE_PATIENT_MEDICATIONANDALLERGIES,
            payload: payload,
          });
        },
        (error) => {
          dispatch({
            type: actions.UPDATE_PATIENT_MEDICATIONANDALLERGIES,
            payload: payload,
          });
        }
      );
  };
}

export function updateprofile(profileImage, loggedUserInfo) {
  let payload = {
    globalmessage: "",
  };

  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    let headers = {
      "Content-type": "application/json; charset=UTF-8",
    };

    loggedUserInfo.profileImage = `../../images/${profileImage.name}`;
    loggedUserInfo.password = loggedUserInfo.rpassword;
    axios
      .put(`${URLS.USER}${loggedUserInfo.id}`, loggedUserInfo, { headers })
      .then(
        (response) => {
          payload.globalmessage = `Profile Pic updated successfully`;
          dispatch({ type: actions.UPDATE_PROFILEPIC, payload: payload });
        },
        (error) => {
          payload.globalmessage = `Updation ERROR: ${error.response.data}`;
          //       // payload.statusCode = 400;
          dispatch({ type: actions.UPDATE_PROFILEPIC, payload: payload });
        }
      );
  };
}

export function GetPatientDemographics(userId) {
  let payload = {
    globalmessage: "",
    userDemographics: {},
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.get(`${URLS.GET_PATIENT_DEMOGRAPHICS}${userId}`).then(
      (response) => {
        payload.globalmessage = `Demographics Retrieved...`;
        payload.userDemographics = response.data;
        dispatch({ type: actions.GET_PATIENT_DEMOGRAPHICS, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.userDemographics = {};
        dispatch({ type: actions.GET_PATIENT_DEMOGRAPHICS, payload: payload });
      }
    );
  };
}

export function UpdatePatientDemographics(patientId, upadatedData) {
  let payload = {
    globalmessage: "",
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios
      .put(
        `${URLS.DEMOGRAPHICS}/${patientId}`,
        JSON.stringify(upadatedData),
        config
      )
      .then(
        (response) => {
          payload.globalmessage = "Demographics Updated...";
          dispatch({
            type: actions.UPDATE_PATIENT_DEMOGRAPHICS,
            payload: payload,
          });
        },
        (error) => {
          dispatch({
            type: actions.UPDATE_PATIENT_DEMOGRAPHICS,
            payload: payload,
          });
        }
      );
  };
}

export function GetPatientImmunization(userId) {
  let payload = {
    globalmessage: "",
    userImmunization: {},
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.get(`${URLS.GET_PATIENT_IMMUNIZATION}${userId}`).then(
      (response) => {
        payload.globalmessage = `Patient Immunization Received`;
        payload.userImmunization = response.data[0];
        dispatch({ type: actions.GET_PATIENT_IMMUNIZATION, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.userImmunization = {};
        dispatch({ type: actions.GET_PATIENT_IMMUNIZATION, payload: payload });
      }
    );
  };
}

export function GetAppointments(userId) {
  let payload = {
    globalmessage: "",
    appointmentsDetails: [],
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.get(`${URLS.GET_APPOINTMENT_DETAILS}${userId}`).then(
      (response) => {
        payload.globalmessage = `Appointment retived`;
        payload.appointmentsDetails = response.data;
        dispatch({ type: actions.GET_APPOINTMENT_DETAILS, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.appointmentsDetails = [];
        dispatch({ type: actions.GET_APPOINTMENT_DETAILS, payload: payload });
      }
    );
  };
}

export function GetMedicationAllergies(userId) {
  let payload = {
    globalmessage: "",
    userMedicationAllergy: {},
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;
    axios.get(`${URLS.GET_PATIENT_MEDICATION_ALLERGY}${userId}`).then(
      (response) => {
        payload.globalmessage = `Medication Allergy Retrieved...`;
        payload.userMedicationAllergy = response.data[0];
        dispatch({
          type: actions.GET_PATIENT_MEDICATION_ALLERGY,
          payload: payload,
        });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.userMedicationAllergy = {};
        dispatch({
          type: actions.GET_PATIENT_MEDICATION_ALLERGY,
          payload: payload,
        });
      }
    );
  };
}

export function GetPendingAppointment() {
  let payload = {
    pendingAppointments: [],
    pendingAppointmentCount: 0,
  };
  return (dispatch, getState) => {
    authToken = getState().login.authToken;

    axios.get(URLS.PENDING_APPOINTMETS).then(
      (response) => {
        payload.pendingAppointments = response.data;
        payload.pendingAppointmentCount = response.data.length;
        dispatch({ type: actions.GET_PENDING_APPOINTMENT, payload: payload });
      },
      (error) => {
        payload.pendingAppointments = [];
        payload.pendingAppointmentCount = 0;
        dispatch({ type: actions.GET_PENDING_APPOINTMENT, payload: payload });
      }
    );
  };
}