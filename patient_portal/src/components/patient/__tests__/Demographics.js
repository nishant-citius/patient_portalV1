import Demographics from "../../patient/Demographics";
import Login from "../../common/Login";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { DemographicsReducer } from "redux/reducers/DemographicsReducer";
import { PatientDemographicsReducer } from "redux/reducers/PatientDemographicsReducer";
import { mount } from "enzyme";
import { LoginReducer } from "redux/reducers/loginReducer";

describe("Demographics test", () => {
  let store;
  let jsx;
  let rootReducer;

  beforeEach(() => {
    rootReducer = combineReducers({
      login: LoginReducer,
      demographics: DemographicsReducer,
      patientDemographics: PatientDemographicsReducer,
    });
    store = createStore(rootReducer);
    jsx = (
      <Provider store={store}>
        <Login />
        <Demographics />
      </Provider>
    );
  });
  test("Should render Demographics Component", () => {
    const wrapper = mount(jsx);
    expect(wrapper.exists("Demographics")).toBe(true);
  });

  test("Should render one button", () => {
    const wrapper = mount(jsx);
    expect(wrapper.exists('button[children="Submit"]')).toBe(true);
  });
});
