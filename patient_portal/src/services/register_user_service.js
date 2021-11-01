import axios from "axios";
import * as URLS from "./url_list";
// import * as actions from "../redux/actions/userActions";

class UserServices {
  GetAllUsers() {
    let url = URLS.BASE_URL + "/users";
    return axios.get(url);
  }
  /**registration */
  AddUser(user) {
    let url = URLS.BASE_URL + "/users";
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    console.log(user);
    return axios.post(url, JSON.stringify(user), config);
  }

  Addpatientdemographics(user) {
    let url = URLS.BASE_URL + "/demographics";

    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.post(url, JSON.stringify(user), config);
  }

  Addpatientimmunization(user) {
    let url = URLS.BASE_URL + "/immunization";

    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.post(url, JSON.stringify(user), config);
  }

  Addpatientvitals(user) {
    let url = URLS.BASE_URL + "/vitals";

    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.post(url, JSON.stringify(user), config);
  }

  // Addmedicationandallergies(user) {
  //   let url = URLS.BASE_URL + "/medic_allergy";

  //   let config = {
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //     },
  //   };
  //   return axios.post(url, JSON.stringify(user), config);
  // }
}

/*********Admin Serives***********/
class AdminServices {
  getAllPatients() {
    const url = `${URLS.BASE_URL}/users?role=patient`;
    return axios.get(url);
  }

  getAllPhysicians() {
    const url = `${URLS.BASE_URL}/users?role=physician`;
    return axios.get(url);
  }

  getUserById(userId) {
    const url = `${URLS.BASE_URL}/users?id=${userId}`;
    return axios.get(url);
  }

  getPhysicianBySpeciality(speciality) {
    const url = `${URLS.BASE_URL}/users?role=physician&&speciality=${speciality}`;
    return axios.get(url);
  }

  updateUser(userId, updatedData) {
    let url = `${URLS.BASE_URL}/users/${userId}`;
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.put(url, JSON.stringify(updatedData), config);
  }

  getAllAppointments() {
    const url = `${URLS.BASE_URL}/appointments`;
    return axios.get(url);
  }

  getPatientAppointments(patientId) {
    const url = `${URLS.BASE_URL}/appointments?patientid=${patientId}`;
    return axios.get(url);
  }

  getPhysicianAppointments(physicianId) {
    const url = `${URLS.BASE_URL}/appointments?doc_id=${physicianId}`;
    return axios.get(url);
  }

  addNewAppointment(appointmentData) {
    let url = URLS.BASE_URL + "/appointments";
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.post(url, JSON.stringify(appointmentData), config);
  }

  getAppointmentsForDate(_id, date) {
    const url = `${URLS.BASE_URL}/appointments?appointmentDate=${date}&&doc_id=${_id}`;
    return axios.get(url);
  }

  appointmentsOnDate(date) {
    const url = `${URLS.BASE_URL}/appointments?appointmentDate=${date}`;
    return axios.get(url);
  }

  editAppointment(appointmentId, data) {
    let url = `${URLS.BASE_URL}/appointments/${appointmentId}`;
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.put(url, JSON.stringify(data), config);
  }

  deleteUser(userId) {
    const url = `${URLS.BASE_URL}/users/${userId}`;
    return axios.delete(url);
  }

  addNewUser(user) {
    let url = URLS.BASE_URL + "/users";
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.post(url, JSON.stringify(user), config);
  }

  getDoctorSpeciality() {
    const url = `${URLS.BASE_URL}/physician_speciality`;
    return axios.get(url);
  }

  getPatientVitals(patientId) {
    const url = `${URLS.BASE_URL}/patientvitals?patientId=${patientId}`;
    return axios.get(url);
  }
}
/*********Admin Serives***********/

let userService = new UserServices();
let adminService = new AdminServices();

export { userService, adminService };
