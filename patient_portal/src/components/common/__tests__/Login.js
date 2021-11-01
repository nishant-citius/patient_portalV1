import { common } from "@mui/material/colors";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import Login from "../Login";
import { createStore } from "redux";
import LoginReducer from "../../../redux/reducers/loginReducer";
import configureStore from "redux-mock-store";
const mockStore = configureStore();

describe("Test case for testing login", () => {
  const initialState = {
    email: "nc@email.com",
    password: "12345",
  };
  let store, wrapper;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  it("username check", () => {
    // wrapper = shallow(
    //   <Provider store={mockStore}>
    //     <Login />
    //   </Provider>
    // );
    console.log(wrapper);
    wrapper.find("input").simulate("change", {
      target: { name: "email", value: "nc@email.com" },
    });
    expect(wrapper.state("email")).toEqual("nc@email.com");
  });
  //   it("password check", () => {
  //     wrapper = shallow(<Login />);
  //     wrapper.find('input[type="password"]').simulate("change", {
  //       target: { name: "password", value: "12345" },
  //     });
  //     expect(wrapper.state("password")).toEqual("12345");
  //   });
  //   it("login check with right data", () => {
  //     wrapper = shallow(<Login />);
  //     wrapper.find('input[type="text"]').simulate("change", {
  //       target: { name: "email", value: "nc@email.com" },
  //     });
  //     wrapper.find('input[type="password"]').simulate("change", {
  //       target: { name: "password", value: "12345" },
  //     });
  //     wrapper.find("button").simulate("click");
  //     expect(wrapper.state("isLogined")).toBe(true);
  //   });
  //   it("login check with wrong data", () => {
  //     wrapper = shallow(<Login />);
  //     wrapper.find('input[type="text"]').simulate("change", {
  //       target: { name: "email", value: "nc@email.com" },
  //     });
  //     wrapper.find('input[type="password"]').simulate("change", {
  //       target: { name: "password", value: "1234" },
  //     });
  //     wrapper.find("button").simulate("click");
  //     expect(wrapper.state("isLogined")).toBe(false);
  //   });
});
