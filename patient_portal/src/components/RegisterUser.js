import React from "react";

const RegisterUser = () => {
  return (
    <>
      
      <div className="container">
      <h4 className="text-center">Register Page</h4>
        <div className="row justify-content-center">
          <div className="col-8">
          <form name="registration_form" method="Post">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Enter Your First name"/>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Enter Your Last name"/>
            </div>
            <div className="form-group">
              <label>DOB</label>
              <input type="text" className="form-control" name="dob" id="dob" placeholder="Enter Your Dob"/>
            </div>
            <div className="form-group">
              <label>User Name</label>
              <input type="text" className="form-control" name="user_name" id="user_name" placeholder="Enter User Name"/>
            </div>
            <div className="form-group">
              <label>Role</label>
              <select className="form-control" name="role" id="role">
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="patient">Patient</option>
                <option value="physician">Physician</option>
              </select>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" id="email" name="email"  placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className="form-group">
              <label>Retype-Password</label>
              <input type="password" className="form-control" id="re_password" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
