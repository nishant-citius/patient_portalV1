import renderer from "react-test-renderer";
import Login from "../../common/Login";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { LoginReducer } from "redux/reducers/loginReducer";
import Immunization from "../Immunization";
import { PatientImmunizationReducer } from "redux/reducers/PatientImmunizationReducer";
describe("Immunization snapshot test", () => {
  let store;
  let jsx;
  let rootReducer;

  beforeEach(() => {
    rootReducer = combineReducers({
      login: LoginReducer,
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
