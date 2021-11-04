import React, { useState } from "react";
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
import ModalPopup from "shared/dialog/ModalPopup";
import AddUsers from "../admin/common/AddUsers";

const mapStateToProps = (rootReducer) => {
  return {
    users: rootReducer.getallusers.users,
    globalmessage: rootReducer.getallusers.globalmessage,
    demographics: rootReducer.patientDemographics.patientDemographics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getalluserdata: () => dispatch(actioncreators.GetAllUserData()),
    removeUser: (id) => dispatch(actioncreators.DeleteUser(id)),
  };
};

function UserList(props) {
  function deleteUser(userId) {
    props.removeUser(userId);
    props.flashNotification({
      message: "User Deleted Successfully...!",
      type: "success",
    });
    props.getalluserdata();
  }

  return (
    <>
      <div className="container mt-5">
        <Link to={`/addusers`} className="btn btn-primary float-end mr-4">
          Add User
        </Link>
        <h1 className="text-success text-center fw-bold ">User List</h1>
        <table className="table table-bordered shadow mt-4">
          <thead className="table-dark">
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">D.O.B.</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{`${user.fName} ${user.lName}`}</td>
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
                  <td>{user.role}</td>
                  <td>
                    <span className="p-2">
                      {/* <Link to={`/userdetails/${user.id}`}> */}

                      <Link
                        to={{
                          pathname: `/userdetails/${user.id}`,
                          state: { user: user },
                        }}
                      >
                        <BsPersonFill />
                      </Link>
                      {/* to=
                      {{
                        pathname: `/attendAppointment/${appointments.patientId}`,
                        state: { appointmentDetails: appointments },
                      }} */}
                    </span>
                    <span className="p-2">
                      <Link to={`/edit/${user.id}`}>
                        <BsFillPencilFill />
                      </Link>
                    </span>
                    <span className="p-2 hand-pointer">
                      <BsFillTrashFill onClick={() => deleteUser(user.id)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
