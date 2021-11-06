import renderer from "react-test-renderer";
import Demographics from "../../patient/Demographics";
import Login from "../../common/Login";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { DemographicsReducer } from "redux/reducers/DemographicsReducer";
import { PatientDemographicsReducer } from "redux/reducers/PatientDemographicsReducer";
import { LoginReducer } from "redux/reducers/loginReducer";

describe("Demographics snapshot test", () => {
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
  it("should render properly", () => {
    const tree = renderer.create(jsx).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
