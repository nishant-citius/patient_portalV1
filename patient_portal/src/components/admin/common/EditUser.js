import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { adminService } from "../../../services/register_user_service";
import { Link } from "react-router-dom";
import * as actions from "../../../redux/actions/userActionCreater";
import { connect } from "react-redux";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const EditUser = (props) => {
  let tempUserData = {
    fName: "",
    lName: "",
    dob: "",
    username: "",
    email: "",
    mobile: "",
    role: "",
    speciality: "",
    password: "",
    createdDate: Date(),
  };

  const [user, setUser] = useState(tempUserData);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    loadUsers(id);
  }, [id]);

  const loadUsers = (_id) => {
    adminService.getUserById(_id).then(
      (response) => {
        setUser(response.data[0]);
      },
      (error) => {
        return;
      }
    );
  };

  const handleUserChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitUserData = (e) => {
    e.preventDefault();
    let newUserData = { ...user };

    props.updateUser(id, newUserData);
    if (props.globalmessage === "Edit Success") {
      props.flashNotification({
        message: `${newUserData.fName} ${newUserData.lName} details updated...`,
        type: "success",
      });
      history.push("/allusers");
    } else {
    }
  };

  return (
    <div className="container  mt-5">
      <Link className="btn btn-warning" to="/allusers">
        <BsFillArrowLeftSquareFill />
        <span className="m-2">Back</span>
      </Link>
      <h3 className="text-center fw-bold ">Edit Details</h3>
      <div className="row justify-content-center">
        <div className="col-8">
          <form name="registration_form" onSubmit={submitUserData}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="fName"
                id="fName"
                placeholder="Enter Your First name"
                value={user.fName}
                onChange={handleUserChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lName"
                id="lName"
                placeholder="Enter Your Last name"
                value={user.lName}
                onChange={handleUserChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>DOB</label>
              <input
                type="date"
                className="form-control"
                name="dob"
                id="dob"
                placeholder="Enter Your Dob"
                value={user.dob}
                onChange={handleUserChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                placeholder="Enter User Name"
                value={user.username}
                onChange={handleUserChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleUserChange}
                disabled={true}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                id="mobile"
                placeholder="Enter Mobile Number"
                value={user.mobile}
                onChange={handleUserChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Role</label>
              <select
                className="form-control"
                name="role"
                id="role"
                value={user.role}
                onChange={handleUserChange}
                disabled={true}
              >
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="patient">Patient</option>
                <option value="physician">Physician</option>
                <option value="nurse">Nurse</option>
              </select>
            </div>
            <br />
            {user.role === "physician" ? (
              <>
                <div className="form-group">
                  <label>Speciality</label>
                  <select
                    className="form-control"
                    name="speciality"
                    id="speciality"
                    onChange={handleUserChange}
                    placeholder="Enter Speciality"
                    value={user.speciality}
                  >
                    <option value="">Select</option>
                    <option value="Anaesthesia">Anaesthesia</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Corneal Transplant">
                      Corneal Transplant
                    </option>
                    <option value="Dermatology And Cosmetology">
                      Dermatology And Cosmetology
                    </option>
                    <option value="General Surgery">General Surgen</option>
                    <option value="Infectious Diseases">
                      Infectious Diseases
                    </option>
                    <option value="Liver Transplant & Hepatic Surgery">
                      Liver Transplant & Hepatic Surgery
                    </option>
                    <option value="Gynecology">Gynecology</option>
                    <option value="Neonatology">Neonatology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Orthopedics & Joint Replacement">
                      Orthopedics & Joint Replacement
                    </option>
                    <option value="Physiotherapy">Physiotherapy</option>
                    <option value="Plastic Surgery">Plastic Surgery</option>
                    <option value="Psychiatry">Psychiatry</option>
                    <option value="Urology">Urology</option>
                  </select>
                </div>
                <br />
              </>
            ) : (
              ""
            )}
            <br />
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleUserChange}
                disabled={true}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary mt-4">
              Save Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (rootReducer) => {
  return {
    globalmessage: rootReducer.updateusers.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (userId, updatedData) =>
      dispatch(actions.EditUser(userId, updatedData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
