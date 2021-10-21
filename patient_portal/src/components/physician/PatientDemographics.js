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
    
    demographicsData:rootReducer.pdemographics.demographics
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   
    getDemographicsData : () => dispatch(actioncreators.GetDemographics())
  };
};

export class PatientDemographics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
   
    this.props.getDemographicsData()
    console.log("Data----",this.props.demographicsData)
  }

  render() {
    return (
      <>
        <div className="container mt-5"><br></br>
        <Link className="btn btn-warning" to="/patientdata">
            <BsFillArrowLeftSquareFill />
            <span className="m-2">Back</span>
          </Link>
          <h3 className="text-success text-center fw-bold ">Patient Demographics List</h3>
          <table className="table table-bordered shadow mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">D.O.B.</th>
                <th scope="col">Gender</th>
                <th scope="col">Ethnicity</th>
                <th scope="col">Medical History</th>
                <th scope="col">Family Medical History</th>
                <th scope="col">Insurance Provider</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.demographicsData.map((demographics, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{`${demographics.fName} ${demographics.lName}`}</td>
                    <td>{demographics.dob}</td>
                    <td>{demographics.gender}</td>
                    <td>{demographics.ethnicity}</td>
                    <td>{demographics.medical_history}</td>
                    <td>{demographics.family_medical_history}</td>
                    <td>{demographics.insurance_provider}</td>
                    <td>
                      {demographics.isActive ? (
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
                        <Link to={`/userdetails/${demographics.id}`}>
                          <BsPersonFill />
                        </Link>
                      </span>
                      <span className="p-2">
                        <Link to={`/edit/${demographics.id}`}>
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

export default connect(mapStateToProps, mapDispatchToProps)(PatientDemographics);
