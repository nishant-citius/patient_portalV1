import { render } from "@testing-library/react";
import { Container } from "mui";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import DefaultUserpic from "../../images/user.png";
import * as actions from "../../redux/actions/userActionCreater";
import Grid from "@material-ui/core/Grid";


class MyProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId:this.props.currentUser.userId,
      fName: this.props.currentUser.fName,
      lName: this.props.currentUser.lName,
      email: this.props.currentUser.email,
      mobile: this.props.currentUser.mobile,
      dob: this.props.currentUser.dob,
      blood_group: this.props.currentUser.blood_group,
      profileImage: this.props.currentUser.profileImage,
      //  username:this.props.username,
      //  role:this.props.role,
      //  password:this.props.password,
      //  repassword:this.props.repassword,
     
    }
  }

  updateprofilehandler = (e) => {
    e.preventDefault();
     //create object of formData
    const formData = new FormData();
    formData.append("profileImage", this.state.profileImage);
    this.props.updateProfile(this.state.profileImage, this.props.currentUser)
    console.log(this.props.currentUser)
    
  };

  profilechange = (e) => {
    
     console.log(e.target.files[0])
     this.setState(
      {
       profileImage: e.target.files[0]
     });
  }

  render() {

console.log(this.props.currentUser)
    if (this.state.profileImage) {
      var profilePic = this.state.profileImage
    } else {
      profilePic = DefaultUserpic
    }
    return (
      <>
        <div className="container mt-5">
          <Grid container>
            <Grid item xl={6} >
              <img src={profilePic} alt="profilepic" width="190" />

            </Grid>
            <Grid item xl={6}  >
              <h3 className="text-success text-center fw-bold ">User Profile</h3>
              <table className="table table-bordered shadow mt-4">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">D.O.B.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Blood Group</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.fName} </td>
                    <td>{this.state.dob}</td>
                    <td>{this.state.email}</td>
                    <td>{this.state.mobile}</td>
                    <td>{this.state.blood_group}</td>
                  </tr>
                </tbody>
              </table>
              <div class="form-group">
                <label>Profile Image</label>
                <input type="file" name="profileImage" onChange={this.profilechange} class="form-control" />
              </div>
              <button type="submit" onClick={this.updateprofilehandler}
                className="btn btn-primary mt-2">Update Profile</button>
            </Grid>
          </Grid>
          <br />

        </div>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (profileImage, loggedUserInfo) => dispatch(actions.updateprofile(profileImage, loggedUserInfo)),
  };

};


let hof = connect(mapStatetoProps, mapDispatchToProps);
export default hof(MyProfile);
// export default MyProfile