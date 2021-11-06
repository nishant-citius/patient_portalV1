import renderer from "react-test-renderer";
import Medication_Allergies from "../../patient/Medication_Allergies";
import Login from "../../common/Login";
import { LoginReducer } from "redux/reducers/loginReducer";
import { MedicationandAllergiesReducer } from "redux/reducers/MedicationandAllergiesreducer";
import { PatientMedicationAllergyReducer } from "redux/reducers/PatientMedicationAllergyReducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

describe("Medication&Allergy snapshot Test", () => {
  let store;
  let jsx;
  let rootReducer;

  beforeEach(() => {
    rootReducer = combineReducers({
      login: LoginReducer,
      medication_allergies: MedicationandAllergiesReducer,
      patientMedicationAllergy: PatientMedicationAllergyReducer,
    });
    store = createStore(rootReducer);
    jsx = (
      <Provider store={store}>
        <Login />
        <Medication_Allergies />
      </Provider>
    );
  });
  it("should render properly", () => {
    const tree = renderer.create(jsx).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
