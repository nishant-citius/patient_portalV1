import React from "react";

const Table = ({ users }) => {
  return (
    <>
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
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
                    <td>{`${user.fName} ${user.lName}`}</td>
                    <td>{}</td>

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
};

export default Table;
