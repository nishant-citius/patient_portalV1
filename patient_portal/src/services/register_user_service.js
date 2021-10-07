import axios from "axios";
import * as URLS from "../shared/url_list";

class UserServices {
  GetAllUsers() {
    let url = URLS.BASE_URL + "/users";
    return axios.get(url);
  }

  /** */
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
}

let userService = new UserServices();
export { userService };
