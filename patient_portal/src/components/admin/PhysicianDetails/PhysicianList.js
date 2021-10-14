import { error } from "jquery";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { adminService } from "../../../services/register_user_service";

const PhysicianList = () => {
  const [users, setUsers] = useState([]);

  //initialLoad
  useEffect(() => {
    loadUsers();
  }, []);

  //loadUsersDetails
  const loadUsers = () => {
    adminService.getAllPhysicians().then(
      (response) => {
        setUsers(response.data);
      },
      (error) => {
        return;
      }
    );
  };

  //deleteUser
  const deleteUser = (id) => {
    adminService.deleteUser(id).then(
      (response) => {
        loadUsers();
      },
      (error) => {
        return;
      }
    );
  };

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">id</th>
            <th scope="col">First+last name</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            {/* <th scope="col">Speciality</th>
            <th scope="col">DOJ</th>
            <th scope="col">Status</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <th>{user.id}</th>
                <td>{`${user.fName} ${user.lName}`}</td>
                <td>{user.dob}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <Link
                    to={`/physiciandetails/${user.id}`}
                    className="btn btn-primary m-2"
                  >
                    View
                  </Link>
                  <Link to={`/edit/${user.id}`} className="btn btn-primary m-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default PhysicianList;
