//import { common } from "@mui/material/colors";
import { shallow, mount } from "enzyme";
import Login from "../Login";
import { Provider } from "react-redux";
//import LoginReducer from "../../../redux/reducers/loginReducer";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("Login Component", () => {
  let store;
  let jsx;

  beforeEach(() => {
    store = mockStore({ login: { email: "", password: "" } });
    jsx = (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  test("email check", () => {
    const wrapper = mount(jsx);
    wrapper.find("input").simulate("change", {
      target: {
        value: "nc@email.com",
      },
    });
    expect(wrapper.state("email")).toEqual("nc@email.com");
  });
});
