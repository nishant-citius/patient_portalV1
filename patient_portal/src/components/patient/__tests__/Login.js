import { common } from "@mui/material/colors";
import { shallow, mount } from "enzyme";
//import renderer from "react-test-renderer";
import Login from "../../common/Login";
////import { createStore, combineReducers } from "redux";

//import { connect } from "react-redux";
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
  // beforeEach(() => {
  //   rootReducer = combineReducers({
  //     login: LoginReducer,
  //   });
  //   store = createStore(rootReducer);
  //   jsx = (
  //     <Provider store={store}>
  //       <Login />
  //     </Provider>
  //   );
  // });
  it("should render an email input tag", () => {
    const wrapper = mount(jsx);
    // const field = wrapper.find("Field");
    // const result = field.name;
    //const wrapper = shallow(<Loergin></Login>);
    // console.log(wrapper.debug());
    expect(wrapper.find('Field[type="text"]').exists()).toBe(true);
  });

  it("should render a password input tag", () => {
    const wrapper = mount(jsx);
    expect(wrapper.find('Field[type="password"]').exists()).toBe(true);
  });

  it("should render a submit button", () => {
    const wrapper = mount(jsx);
    console.log(wrapper.find('button[type="submit"]'));
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });
});
