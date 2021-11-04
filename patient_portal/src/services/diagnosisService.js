import axios from "axios";
import * as URLS from "./url_list";

class DiagnosisService {
  getDiagnosis() {
    const url = `${URLS.BASE_URL}/diagnosis`;
    return axios.get(url);
  }

  getDiagnosisByDescription(description) {
    const url = `${URLS.BASE_URL}/diagnosis?description=${description}`;
    return axios.get(url);
  }

  addNewDiagnosis(diagnosisData) {
    let url = URLS.BASE_URL + "/diagnosis";
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.post(url, JSON.stringify(diagnosisData), config);
  }

  editDiagnosis(id, updatedData) {
    let url = `${URLS.BASE_URL}/diagnosis/${id}`;
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.put(url, JSON.stringify(updatedData), config);
  }

  deleteDiagnosis(id) {
    const url = `${URLS.BASE_URL}/diagnosis/${id}`;
    return axios.delete(url);
  }
  
  addPatientDiagnosis(_patientDignosis) {
    let url = URLS.BASE_URL + "/patient_diagnosis";
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.post(url, JSON.stringify(_patientDignosis), config);
  }
}


let diagnosisService = new DiagnosisService();
export { diagnosisService };
