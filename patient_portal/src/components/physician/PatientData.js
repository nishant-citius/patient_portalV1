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
    patientData: rootReducer.patients.patients,
    globalmessage: rootReducer.patients.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPatients: () => dispatch(actioncreators.GetAllPatientsData()),
  };
};

export class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllPatients();
  }

  render() {
    return (
      <>
        <div className="container mt-5">
          <Link className="btn btn-warning" to="/admin">
            <BsFillArrowLeftSquareFill />
            <span className="m-2">Back</span>
          </Link>
          <h1 className="text-success text-center fw-bold ">Patient List</h1>
          <table className="table table-bordered shadow mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">D.O.B.</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.patientData.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <Link to={"/patientdemographics/" + user.userid}>
                        {`${user.fName} ${user.lName}`}
                      </Link>
                    </td>
                    <td>{user.dob}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                      {user.isActive ? (
                        <>
                          <BsCheckCircleFill className="hand-pointer" />
                          <span className="p-2">Active</span>
                        </>
                      ) : (
                        <>
                          <BsFillXCircleFill className="hand-pointer" />
                          <span className="p-2">Inactive</span>
                        </>
                      )}
                    </td>
                    <td>
                      <span className="p-2">
                        <Link to={`/userdetails/${user.id}`}>
                          <BsPersonFill />
                        </Link>
                      </span>
                      <span className="p-2">
                        <Link to={`/edit/${user.id}`}>
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
