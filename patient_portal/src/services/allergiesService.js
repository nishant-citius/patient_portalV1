import axios from "axios";
import * as URLS from "./url_list";

class AllergiesService {
  getAllAllergies() {
    const url = `${URLS.BASE_URL}/allergies`;
    return axios.get(url);
  }

  getAllAllergiesByName(name) {
    const url = `${URLS.BASE_URL}/allergies?AllergyName=${name}`;
    return axios.get(url);
  }

  getAllAllergiesByType(alltype) {
    const url = `${URLS.BASE_URL}/allergies?AllergyType=${alltype}`;
    return axios.get(url);
  }

  addNewAllergy(newdata) {
    let url = URLS.BASE_URL + "/allergies";
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.post(url, JSON.stringify(newdata), config);
  }

  editAllergy(id, updatedData) {
    let url = `${URLS.BASE_URL}/allergies/${id}`;
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    return axios.put(url, JSON.stringify(updatedData), config);
  }

  deleteAllergy(id) {
    const url = `${URLS.BASE_URL}/allergies/${id}`;
    return axios.delete(url);
  }
}

let allergyServices = new AllergiesService();
export { allergyServices };
