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
    demographicsData:rootReducer.pdemographics.demographics
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPatients: () => dispatch(actioncreators.GetAllPatientsData()),
    getDemographicsData : () => dispatch(actioncreators.GetDemographics())
  };
};

export class PatientList1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllPatients();
    this.props.getDemographicsData()
    console.log("Data----",this.props.demographicsData)
  }

  render() {
    return (
      <>
        <div className="container mt-5"><br></br>
        <Link className="btn btn-warning" to="/physician">
            <BsFillArrowLeftSquareFill />
            <span className="m-2">Back</span>
          </Link>
          <h3 className="text-success text-center fw-bold ">Patient List</h3>
          <table className="table table-bordered shadow mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">D.O.B.</th>
                <th scope="col">Email</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.patientData.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <Link to={`/userdetails/${user.id}`}><td>{`${user.fName} ${user.lName}`}</td></Link>
                    <td>{user.dob}</td>
                    <td>{user.email}</td>
                    <td>{user.blood_group}</td>
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
                      {/* <span className="p-2">
                        <Link to={`/edit/${user.id}`}>
                          <BsFillPencilFill />
                        </Link>
                      </span> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(PatientList1);
