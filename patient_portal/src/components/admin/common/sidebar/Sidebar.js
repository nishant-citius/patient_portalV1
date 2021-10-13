import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  AttachMoney,
  WorkOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <h3 className="sidebarTitle fw-bold text-success p-2">
        Welcome {props.userInfo.fName}
      </h3>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/admin" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                DashBoard
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle fw-bold text-success">Manage Users</h3>
          <ul className="sidebarList">
            <Link to="/allusers" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                All Users
              </li>
            </Link>
            <Link to="/patientlist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Patient List
              </li>
            </Link>
            <Link to="/physicianlist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Physician List
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle fw-bold text-success">Others</h3>
          <ul className="sidebarList">
            <Link to="/appointments" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Appointments
              </li>
            </Link>
            <Link to="/billing" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Billing
              </li>
            </Link>
            <Link to="/immunizationdetails" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Immunization Details
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;