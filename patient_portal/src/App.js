import "./App.css";
import { Switch, Route } from "react-router-dom";
import PatientPortalHome from "./components/PatientPortalHome";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={PatientPortalHome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegisterUser} />
      </Switch>
    </>
  );
}

export default App;
