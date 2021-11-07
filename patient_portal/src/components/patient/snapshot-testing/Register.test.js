import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import RegisterUser from "../../common/RegisterUser";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("Register snapshot test", () => {
  let store;
  let jsx;

  beforeEach(() => {
    store = mockStore({ register: {} });
    jsx = (
      <Provider store={store}>
        <RegisterUser />
      </Provider>
    );
  });
  it("should render properly", () => {
    const tree = renderer.create(jsx).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
