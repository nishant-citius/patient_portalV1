import React from "react";

const ImmunizationDetails = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Patient name</th>
            <th scope="col">DOB</th>
            <th scope="col">Phone</th>
            <th scope="col">Immunized date</th>
            <th scope="col">Vaccine Name</th>
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
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ImmunizationDetails;
