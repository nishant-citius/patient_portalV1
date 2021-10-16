import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { adminService } from "../../../services/register_user_service";

const PhysicianDetails = (props) => {
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

  const loadUsers = (_id) => {
    adminService.getUserById(_id).then(
      (response) => {
        console.log(response.data);
        setUser(response.data[currentUserIndex]);
      },
      (error) => {
        return;
      }
    );
  };

  useEffect(() => {
    loadUsers(id);
  }, [id]);

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/patientlist">
        Patient List
      </Link>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">
          Name: {`${user.fName}  ${user.lName}`}
        </li>
        <li className="list-group-item">DOB: {user.dob}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Contact No: {user.mobile}</li>
        <li className="list-group-item">Username: {user.username}</li>
      </ul>
    </div>
  );
};

export default PhysicianDetails;
