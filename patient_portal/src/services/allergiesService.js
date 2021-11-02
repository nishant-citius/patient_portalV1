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

  addNewAllergy(data) {
    const url = `${URLS.BASE_URL}/allergies`;
    return axios.post(url);
  }
}

let allergyServices = new AllergiesService();
export { allergyServices };
