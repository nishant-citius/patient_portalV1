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

  it("Should capture email correctly onChange and change the props accordingly", function () {
    const wrapper = mount(jsx);
    const input = wrapper.find('input[type="text"]').at(2);
    // input.simulate('change', {target: {email: 'mail@hotmail.com'}}); -- this does not work

    input.instance('input[type="text"]').value = "mail@hotmail.com";
    input.simulate("change");
    expect(wrapper.find('input[type="text"]').at(2).props().value).toEqual(
      "mail@hotmail.com"
    );
    // Alternatively, can check state
    // expect(component.state().email).toEqual('mail@hotmail.com');
  });
  // test("email check", () => {
  //   const wrapper = mount(jsx);
  //   wrapper.find('input[type="text"]').simulate("change", {
  //     target: {
  //       value: "nc@email.com",
  //     },
  //   });
  //   expect(wrapper.state('input[type="text"]')).toEqual("nc@email.com");
  // });
});
