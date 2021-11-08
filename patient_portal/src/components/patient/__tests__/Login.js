//import { common } from "@mui/material/colors";
import React from "react";
import { mount } from "enzyme";
//import renderer from "react-test-renderer";
import Login from "../../common/Login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Login Component", () => {
  const mockStore = configureStore([]);
  let store;
  let jsx;

  beforeEach(() => {
    store = mockStore({
      login: { email: "pooja@gmail.com", password: "12345" },
    });
    jsx = (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });
  it("should render an email input tag", () => {
    const wrapper = mount(jsx);
    expect(wrapper.find('Field[type="text"]').exists()).toBe(true);
  });

  it("should render a password input tag", () => {
    const wrapper = mount(jsx);
    expect(wrapper.find('Field[type="password"]').exists()).toBe(true);
  });

  it("should render a submit button", () => {
    const wrapper = mount(jsx);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });
});
