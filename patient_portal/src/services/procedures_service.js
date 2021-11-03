import axios from "axios";
import * as URLS from "./url_list";

class ProcedureServices {
  getAllProcedure() {
    const url = `${URLS.BASE_URL}/procedures`;
    return axios.get(url);
  }
  getProcedureByName(name) {
    const url = `${URLS.BASE_URL}/procedures/?procedureByName=${name}`;
    return axios.get(url);
  }
  getProcedureById(id) {
    const url = `${URLS.BASE_URL}/procedures/?procedureById=${id}`;
    return axios.get(url);
  }
  UpdateProcedure(id, data) {
    let url = `${URLS.BASE_URL}/procedures/?procedureid=${id}`;
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.put(url, JSON.stringify(data), config);
  }
  addNewProcedure(newdata) {
    let url = URLS.BASE_URL + "/procedures";
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.post(url, JSON.stringify(newdata), config);
  }
  deleteProcedure(id) {
    const url = `${URLS.BASE_URL}/procedures/${id}`;
    return axios.delete(url);
  }

  addPatientProcedure(_patientProcedure) {
    let url = URLS.BASE_URL + "/patient_procedures";
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.post(url, JSON.stringify(_patientProcedure), config);
  }
}
let procedureServices = new ProcedureServices();
export { procedureServices };
