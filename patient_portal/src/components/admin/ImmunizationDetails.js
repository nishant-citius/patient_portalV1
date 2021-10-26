import React from "react";
import { connect } from "react-redux";
import * as actioncreators from "../../redux/actions/userActionCreater";
import { Link } from "react-router-dom";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsPersonFill,
  BsCheckCircleFill,
  BsFillXCircleFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

const mapStateToProps = (rootReducer) => {
  return {
    immunizationData: rootReducer.immunizations.immunizations,
    globalmessage: rootReducer.immunizations.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllImmunizations: () =>
      dispatch(actioncreators.GetAllImmunizationData()),
  };
};

export class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //this.props.getAllImmunizations();
    console.log(this.props.immunizationData);
  }

  render() {
    return (
      <>
        <div className="container mt-5">
          <Link className="btn btn-warning" to="/admin">
            <BsFillArrowLeftSquareFill />
            <span className="m-2">Back</span>
          </Link>
          <h1 className="text-success text-center fw-bold ">
            Immunization List
          </h1>
          <table className="table table-bordered shadow mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">Vaccine Name</th>
                <th scope="col">Vaccine Brand</th>
                <th scope="col">Vaccine Dose Number</th>
                <th scope="col">Vaccination Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {this.props.immunizationData.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <th>{user.vaccine_name}</th>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
