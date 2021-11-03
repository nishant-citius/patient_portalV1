function AllergyDetails() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-success text-center fw-bold ">User List</h1>
        <table className="table table-bordered shadow mt-4">
          <thead className="table-dark">
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">D.O.B.</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
}

export default AllergyDetails;
