//import { common } from "@mui/material/colors";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
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

  // it("should render properly", () => {
  //   const tree = renderer.create(jsx).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it("should render an email input tag", () => {
    const wrapper = shallow(jsx);
    expect(wrapper.find("Field[type='email']").exists()).toBe(true);
  });

  // describe('Login Component', () => {

  // it("should render a password input tag", () => {
  //   const wrapper = shallow(jsx);
  //   expect(wrapper.find('Field[type="password"]').exists()).toBe(true);
  // });

  //expect(wrapper.find(CustomerAdd).dive().state("addNewOnSubmit")).toEqual(true);
  // test("email check", () => {
  //   const wrapper = shallow(jsx);

  //   wrapper.find('input[type="text"]');
  //   wrapper.simulate("change", {
  //     target: { name: "email", value: "nc@email.com" },
  //   });

  // wrapper.find('input[type="text"]').simulate("change", {
  //   target: {
  //     value: "nc@email.com",
  //   },
  // });
  // expect(wrapper.state('input[type="text"]')).toEqual("nc@email.com");
  //     expect(wrapper.find(Login).dive().state("email")).toEqual("nc@email.com");
  //   });
});
