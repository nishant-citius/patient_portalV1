import "./App.css";
import { Switch, Route } from "react-router-dom";
import {Link} from "react-router-dom";
import PatientPortalHome from "./components/PatientPortalHome";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import Admin_dashboard from "./components/admin/Admin_dashboard";
import Patient_dashboard from "./components/patient/Patient_dashboard";
import Physician_dashboard from "./components/physician/Physician_dashboard";
import Slider from "./components/Slider";


function App() {
  return (
    <>
      <div>
      <Switch>
        <Route exact path="/" component={PatientPortalHome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/admin" component={Admin_dashboard} />
        <Route path="/patient" component={Patient_dashboard} />
        <Route path="/physician" component={Physician_dashboard} /> 
      </Switch>
      </div>

      <div>
        <Slider />
      </div>
    </>
  );
}

export default App;
