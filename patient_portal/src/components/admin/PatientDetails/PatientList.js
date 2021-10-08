import { React, useState, useEffect } from "react";
import { adminService } from "../../../services/register_user_service";

const PatientList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    adminService.getAllPatients().then(
      (response) => {
        console.log(response.data);
        setUsers(response.data);
        setIsLoading(true);
      },
      (error) => {
        return;
      }
    );
  };

  if (isLoading) {
    return (
      <>
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{index}</th>
                      <td>{user.id}</td>
                      <td>{user.fName}</td>
                      <td>{user.lName}</td>
                      <td>{user.email}</td>
                      <td>{user.dob}</td>
                    </tr>
                  </>
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
        <h1>Loading...</h1>
      </>
    );
  }
};

export default PatientList;
