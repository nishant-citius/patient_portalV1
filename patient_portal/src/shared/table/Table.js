import React from "react";

const Table = (props) => {
  return (
    <>
      <h1 className="text-success text-center fw-bold ">Heading</h1>
      <div className="container-xl">
        <table className="table table-bordered shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{user.id}</td>
                  <td>{`${user.fName} ${user.lName}`}</td>
                  <td>{user.dob}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
