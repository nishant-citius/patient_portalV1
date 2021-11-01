import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";

export class PatientVitals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container mt-5">
          <h1 className="text-success text-center fw-bold ">User List</h1>
          <table className="table table-bordered shadow mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col"> height</th>
                <th scope="col">weight</th>
                <th scope="col">blood_pressure</th>
                <th scope="col">temperature</th>
                <th scope="col">pulse</th>
                <th scope="col">respiration</th>
                <th scope="col"> oxigen_saturation</th>
              </tr>
            </thead>
            <tbody>
              return (<td>{this.props.height}</td>
              <td>{this.props.weight}</td>
              <td>{this.props.blood_pressure}</td>
              <td>{this.props.temperature}</td>
              <td>{this.props.pulse}</td>
              <td>{this.props.respiration}</td>
              <td>{this.props.oxigen_saturation}</td>) );
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    patientvitals: rootReducer.getPatientvitals.getPatientvitals,
    globalmessage: rootReducer.getPatientvitals.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetVitals: (userId) => dispatch(actionCreator.GetVitals(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientVitals);
