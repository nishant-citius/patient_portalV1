import renderer from "react-test-renderer";
//import Demographics from "../../patient/Demographics";
import Login from "../../common/Login";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { LoginReducer } from "redux/reducers/loginReducer";
import Immunization from "../Immunization";
import { PatientImmunizationReducer } from "redux/reducers/PatientImmunizationReducer";
//import {Immunizationreducer} from "redux/reducers/Immunizationreducer";
describe("Immunization snapshot test", () => {
  let store;
  let jsx;
  let rootReducer;

  beforeEach(() => {
    rootReducer = combineReducers({
      login: LoginReducer,
      //immunization: Immunizationreducer,
      patientImmunization: PatientImmunizationReducer,
    });
    store = createStore(rootReducer);
    jsx = (
      <Provider store={store}>
        <Login />
        <Immunization />
      </Provider>
    );
  });
  it("should render properly", () => {
    const tree = renderer.create(jsx).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
