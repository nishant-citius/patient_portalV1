import { userService } from "../services/register_user_service";

// const usersList = () => {
//   userService.GetAllUsers().then(
//     (response) => {
//       console.log(response.data);
//       return response.data;
//     },
//     (error) => {
//       return;
//     }
//   );
// };

// const URL = " http://localhost:9999/users";

// usersList();

let appState = {
  users: [],
};

export default appState;
