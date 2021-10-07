import React from "react";

const PhysicianList = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First+last name</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Speciality</th>
            <th scope="col">DOJ</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Inactive</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PhysicianList;
