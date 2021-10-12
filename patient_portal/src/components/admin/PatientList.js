import { React, useState, useEffect } from "react";
import { adminService } from "../../services/register_user_service";
import { Link } from "react-router-dom";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsPersonFill,
  BsCheckCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";

const PatientList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [userState, setUserState] = useState();

  useEffect(() => {
    loadUsers();
  }, []);

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

  const toggleUserState = (user) => {
    // user.isActive = !user.isActive;
    // setUserState(user.isActive);
  };

  if (isLoading) {
    return (
      <>
        <div className="container mt-4">
          <h1 className="text-success text-center fw-bold ">Patient List</h1>
          <table className="table table-bordered shadow mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                {/* <th scope="col">Id</th> */}
                <th scope="col">Name</th>
                <th scope="col">D.O.B.</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    {/* <td>{user.id}</td> */}
                    <td>{`${user.fName} ${user.lName}`}</td>
                    <td>{user.dob}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                      {user.isActive ? (
                        <>
                          <BsCheckCircleFill
                            className="hand-pointer"
                            onClick={() => toggleUserState(user)}
                          />
                          <span className="p-2">Active</span>
                        </>
                      ) : (
                        <>
                          <BsFillXCircleFill
                            className="hand-pointer"
                            onClick={() => toggleUserState(user)}
                          />
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
                      <span
                        className="p-2 hand-pointer"
                        onClick={() => deleteUser(user.id)}
                      >
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
  } else {
    return <h1 className="text-primary text-center fw-bold">Loading...</h1>;
  }
};

export default PatientList;
