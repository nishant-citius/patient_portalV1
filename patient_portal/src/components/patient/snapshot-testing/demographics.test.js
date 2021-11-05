import renderer from "react-test-renderer";
import Demographics from "../../patient/Demographics";
import Login from "../../common/Login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("Demographics Component", () => {
  let store;
  let jsx;

  beforeEach(() => {
    store = mockStore({
      demographics: {},
      login: { email: "", password: "" },
    });
    jsx = (
      <Provider store={store}>
        <Login />
        <Demographics />
      </Provider>
    );
  });
  it("should render properly", () => {
    const tree = renderer.create(jsx).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
