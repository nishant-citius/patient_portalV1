import React from "react";
import { connect } from "react-redux";
import * as actioncreators from "../../redux/actions/userActionCreater";

export class PatientVitals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("Pooja", this.props.patientvitalsDetails);
    return (
      <>
        <div className="container mt-5">
          <h5 className="text-success text-center fw-bold">Patient Vital</h5>
          <table
            className="dashboard-table"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <thead>
              <tr>
                <th scope="col">Height</th>
                <th scope="col">Weight</th>
                <th scope="col">Blood Pressure</th>
                <th scope="col">Temperature</th>
                <th scope="col">Pulse</th>
                <th scope="col">Respiration</th>
                <th scope="col">Oxygen Saturation</th>
              </tr>
            </thead>
            <tbody>
              <td>{this.props.patientvitalsDetails[0].height}</td>
              <td>{this.props.patientvitalsDetails[0].weight}</td>
              <td>{this.props.patientvitalsDetails[0].blood_pressure}</td>
              <td>{this.props.patientvitalsDetails[0].temperature}</td>
              <td>{this.props.patientvitalsDetails[0].pulse}</td>
              <td>{this.props.patientvitalsDetails[0].respiration}</td>
              <td>{this.props.patientvitalsDetails[0].oxigen_saturation}</td>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    patientvitalsDetails: rootReducer.getPatientvitals.getPatientvitals,
    globalmessage: rootReducer.getPatientvitals.globalmessage,
    isLoggedIn: rootReducer.login.isLoggedIn,
    currentUser: rootReducer.login.loggedUserInfo,
  };
};

export default connect(mapStateToProps, null)(PatientVitals);
