import { React, useState, useEffect } from "react";
import { adminService } from "../../../services/register_user_service";
import { Link } from "react-router-dom";

const PatientList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**nitialLoad */
  useEffect(() => {
    loadUsers();
  }, []);

  /**loadUserDetails */
  const loadUsers = () => {
    adminService.getAllPatients().then(
      (response) => {
        setUsers(response.data);
        setIsLoading(true);
      },
      (error) => {
        return;
      }
    );
  };

  /**Delete User */
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

  if (isLoading) {
    return (
      <>
        <div className="float-end mr-4">
          <Link to={`/addnewuser`} className="btn btn-primary ">
            Add New User
          </Link>
        </div>
        <div className="container-xl">
          <table className="table table-bordered shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{user.id}</td>
                    <td>{`${user.fName} ${user.lName}`}</td>
                    <td>{user.dob}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                      <Link
                        to={`/patientdetails/${user.id}`}
                        className="btn btn-primary m-2"
                      >
                        View
                      </Link>
                      <Link
                        to={`/edit/${user.id}`}
                        className="btn btn-warning m-2"
                      >
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
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="bold text-danger ">Loading...</h1>
      </>
    );
  }
};

export default PatientList;
