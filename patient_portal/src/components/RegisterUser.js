import { React, useState } from "react";

const RegisterUser = () => {
  // const [email, setEmail] = useState[""];
  // const [fName, setfName] = useState[""];
  // const [lName, setlName] = useState[""];
  // const [dob, setdob] = useState[""];
  // const [password, setPassword] = useState[""];
  // const [mobile, setMobile] = useState[""];
  // const [rPassword, setrPassword] = useState[""];

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

  const [user, setUser] = useState(tempUser);

  const handleUserChange = (e) => {
    const name = e.target.name,
      value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitUserData = (e) => {
    e.preventDefault();
    let newUserData = { ...user };

    console.log(newUserData);
  };

  return (
    <>
      <div className="container">
        <h4 className="text-center">Register Page</h4>
        <div className="row justify-content-center">
          <div className="col-8">
            <form name="registration_form" onSubmit={submitUserData}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fName"
                  id="fName"
                  placeholder="Enter Your First name"
                  value={user.fName}
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lName"
                  id="lName"
                  placeholder="Enter Your Last name"
                  value={user.lName}
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>DOB</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  id="dob"
                  placeholder="Enter Your Dob"
                  value={user.dob}
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  placeholder="Enter User Name"
                  value={user.username}
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select
                  className="form-control"
                  name="role"
                  id="role"
                  value={user.role}
                  onChange={handleUserChange}
                >
                  <option value="">Select</option>
                  <option value="admin">Admin</option>
                  <option value="patient">Patient</option>
                  <option value="physician">Physician</option>
                </select>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>Retype-Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="rpassword"
                  name="rpassword"
                  placeholder="Password"
                  value={user.rpassword}
                  onChange={handleUserChange}
                />
              </div>
              <button type="submit" className="btn btn-primary m-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
