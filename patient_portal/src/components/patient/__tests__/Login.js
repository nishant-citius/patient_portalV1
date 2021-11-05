import { common } from "@mui/material/colors";
import { shallow, mount } from "enzyme";
//import renderer from "react-test-renderer";
import Login from "../../common/Login";
import { connect } from "react-redux";
// import { Provider } from "react-redux";
// //import LoginReducer from "../../../redux/reducers/loginReducer";
// import configureStore from "redux-mock-store";
// const mockStore = configureStore([]);

describe("Login Component", () => {
  // let store;
  // let jsx;

  // beforeEach(() => {
  //   store = mockStore({ login: { email: "", password: "" } });
  //   jsx = (
  //     <Provider store={store}>
  //       <Login />
  //     </Provider>
  //   );
  // });
  it("should render an email input tag", () => {
    const wrapper = shallow(<Login />);
    const field = wrapper.find("Field");
    const result = field.name;
    //const wrapper = shallow(<Loergin></Login>);
    console.log(wrapper.debug());
    expect(wrapper.exists("name")).toBe("email");
  });

  it.skip("should render a password input tag", () => {
    const wrapper = shallow(jsx);
    expect(wrapper.find('Field[type="password"]').exists()).toBe(true);
  });

  it.skip("should render a submit button", () => {
    const wrapper = shallow(jsx);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });
});
