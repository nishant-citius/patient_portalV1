import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { adminService } from "../../../services/register_user_service";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import * as actioncreators from "../../../redux/actions/userActionCreater";
import { connect } from "react-redux";

const UserDetails = (props) => {
  let tempUser = {
    fName: "",
    lName: "",
    dob: "",
    username: "",
    email: "",
    mobile: "",
    role: "",
    password: "",
    rpassword: "",
    createdDate: Date(),
  };
  const { id } = useParams(),
    [user, setUser] = useState(tempUser),
    currentUserIndex = 0;

  useEffect(() => {
    loadUsers(id);
  }, [id]);

  const loadUsers = (_id) => {
    // adminService.getUserById(_id).then(
    //   (response) => {
    //     setUser(response.data[currentUserIndex]);
    //   },
    //   (error) => {
    //     return;
    //   }
    // );
    props.getUserDetails(id);
    // setUser(props.userDetails);
  };

  return (
    <>
      <div className="container py-4 border border-3 border-secondary rounded-3 mt-5">
        {/* {user.role === "patient" ? (
          <Link className="btn btn-warning" to="/patientlist">
            <BsFillArrowLeftSquareFill />
            <span className="m-2">Back</span>
          </Link>
        ) : (
          <Link className="btn btn-warning" to="/physicianlist">
            <BsFillArrowLeftSquareFill />
            <span className="m-2">Back</span>
          </Link>
        )} */}
        <h3 className="text-success text-center fw-bold ">User Details</h3>
        <div className="d-flex justify-content-center">
          <ul className="list-group w-50">
            <li className="list-group-item">
              <span className="fw-bold">Name:</span>{" "}
              {`${props.userDetails.fName}  ${props.userDetails.lName}`}
            </li>
            <li className="list-group-item">
              <span className="fw-bold">DOB:</span> {props.userDetails.dob}
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Email:</span> {props.userDetails.email}
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Contact No:</span> {props.userDetails.mobile}
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Username:</span> {props.userDetails.username}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (rootReducer) => {
  return {
    userDetails: rootReducer.userDetails.userDetails,
    globalmessage: rootReducer.patients.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails: (userId) => dispatch(actioncreators.GetUserDetails(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);

// export default UserDetails;
