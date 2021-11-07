import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import Login from "../../common/Login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("Login snapshot test", () => {
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

  it("should render properly", () => {
    const tree = renderer.create(jsx).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
