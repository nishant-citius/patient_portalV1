
const Demographics =() =>{
    return(
   <>
   <div className="container">
      <h4 className="text-center">Patient Demographics</h4>
        <div className="row justify-content-center">
          <div className="col-8">
            <form name="Patient Demographics" onSubmit={submitUserData}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fName"
                  id="fName"
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
                  value={user.lName}
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>D.O.B</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  id="dob"
                 onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  className="form-control"
                  name="gender"
                  id="gender"
                  
                  onChange={handleUserChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  </select>
              </div>

              <div className="form-group">
                <label>Ethnicity/Race</label>
                <input
                  type="text"
                  className="form-control"
                  name="ethnicity/race"
                  id="ethnicity/race"
                 
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>Education</label>
                <input
                  type="text"
                  className="form-control"
                  name="education"
                  id="education"
                 
                  onChange={handleUserChange}
                />
              </div>

              <div className="form-group">
                <label>Employment</label>
                <input
                  type="text"
                  className="form-control"
                  name="employment"
                  id="employment"
                 
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text-"
                  className="form-control"
                  name="address"
                  id="address"
                  onChange={handleUserChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone number"
                  id="phone number"
                  onChange={handleUserChange}
                />
                </div>

               <div className="form-group">
                <label>Medical History</label>
                <input
                  type="text"
                  className="form-control"
                  name="medical history"
                  id="medical history"
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>Family Medical History </label>
                <input
                  type="text"
                  className="form-control"
                  name="family-medical-history"
                  id="family-medical-history"
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label>Surgeries</label>
                <input
                  type="text"
                  className="form-control"
                  name="surgeries"
                  id="surgeries"
                  onChange={handleUserChange}
                />
              </div>

              <div className="form-group">
                <label>Insurance Provider</label>
                <input
                  type="text"
                  className="form-control"
                  name="insurance provider"
                  id="insurance provider"
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


export default Demographics;