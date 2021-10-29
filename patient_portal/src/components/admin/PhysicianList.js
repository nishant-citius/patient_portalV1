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
} from "react-icons/bs";

const mapStateToProps = (rootReducer) => {
  return {
    physiciandata: rootReducer.physicians.physicians,
    globalmessage: rootReducer.physicians.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPhysicians: () => dispatch(actioncreators.GetAllPhysicianData()),
    removeUser: (id) => dispatch(actioncreators.DeleteUser(id)),
  };
};

export class PhysicianDataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteUser(userId) {
    this.props.removeUser(userId);
    this.props.flashNotification({
      message: "Physician Deleted Successfully...!",
      type: "success",
    });
    this.props.getAllPhysicians();
  }

  render() {
    return (
      <>
        <div className="container mt-5">
          <h1 className="text-success text-center fw-bold ">Physician List</h1>
          <table className="table table-bordered shadow mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">Speciality</th>
                <th scope="col">D.O.B.</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.physiciandata.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{`${user.fName} ${user.lName}`}</td>
                    <td>{user.speciality}</td>
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
                      <span className="p-2 hand-pointer">
                        <BsFillTrashFill
                          onClick={() => this.deleteUser(user.id)}
                        />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhysicianDataComponent);
