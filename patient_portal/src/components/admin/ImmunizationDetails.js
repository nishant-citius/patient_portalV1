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
    users: rootReducer.getallusers.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllImmunizations: () =>
      dispatch(actioncreators.GetAllImmunizationData()),
    getalluserdata: () => dispatch(actioncreators.GetAllUserData()),
  };
};

export class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllImmunizations();
    this.props.getalluserdata();
    console.log(this.props.immunizationData);
    console.log(this.props.users);
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
              {this.props.immunizationData.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{this.props.users.fName}</td>
                    <td>{user.general_vaccine[0].vaccine_name}</td>
                    <td>{user.vaccine_brand}</td>
                    <td>{user.dose_detail}</td>
                    <td>{user.general_vaccine[0].vaccine_date}</td>
                    <td>
                      <span className="p-2">
                        <Link>
                          <BsPersonFill />
                        </Link>
                      </span>
                      <span className="p-2">
                        <Link>
                          <BsFillPencilFill />
                        </Link>
                      </span>
                      <span className="p-2">
                        <BsFillTrashFill />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
