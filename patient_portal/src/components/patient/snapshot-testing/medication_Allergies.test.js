import renderer from "react-test-renderer";
import Medication_Allergies from "../../patient/Medication_Allergies";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("  M&A Component", () => {
  let store;
  let jsx;

  beforeEach(() => {
    store = mockStore({ medication_allergies: {} });
    jsx = (
      <Provider store={store}>
        <Medication_Allergies />
      </Provider>
    );
  });
  it("should render properly", () => {
    const tree = renderer.create(jsx).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
