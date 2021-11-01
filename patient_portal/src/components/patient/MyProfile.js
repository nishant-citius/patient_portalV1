import { render } from "@testing-library/react";
import { CardContent, Container } from "mui";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import DefaultUserpic from "../../images/doc_1.jpg";
import * as actions from "../../redux/actions/userActionCreater";
import {Grid,Card} from "mui";
import {BsFillPencilFill} from "react-icons/bs";
import { Link } from "react-router-dom";
class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.currentUser.userId,
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
    };
  }

  // updateprofilehandler = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("profileImage", this.state.profileImage);
  //   this.props.updateProfile(this.state.profileImage, this.props.currentUser);
  // };

  // profilechange = (e) => {
  //   this.setState({
  //     profileImage: e.target.files[0],
  //   });
  // };

  render() {
    if (this.state.profileImage) {
      var profilePic = this.state.profileImage;
    } else {
      profilePic = DefaultUserpic;
    }
    return (
      <>
        <div className="container mt-5">
          <Grid container>
            <Grid item xl={6}>
              <img src={profilePic} alt={profilePic} width="190" />
            </Grid>
            <Grid item xl={6}>
              <Card className="pl-9">
                <CardContent>
              <h3 className="text-success text-center fw-bold ">
                User Profile
              </h3>
              
              <table className="table table-bordered shadow mt-4">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">D.O.B.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Blood Group</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.fName} </td>
                    <td>{this.state.dob}</td>
                    <td>{this.state.email}</td>
                    <td>{this.state.mobile}</td>
                    <td>{this.state.blood_group}</td>
                    <td>
                    <Link to={`/edit/${this.state.userId}`}>
                          <BsFillPencilFill />
                        </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="form-group">
                {/* <label>Profile Image</label>
                <input
                  type="file"
                  name="profileImage"
                  onChange={this.profilechange}
                  class="form-control"
                /> */}
              </div>
              {/* <button
                type="submit"
                onClick={this.updateprofilehandler}
                className="btn btn-primary mt-2"
              >
                Update Profile
              </button> */}
              </CardContent>
              </Card>
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
    updateProfile: (profileImage, loggedUserInfo) =>
      dispatch(actions.updateprofile(profileImage, loggedUserInfo)),
  };
};

let hof = connect(mapStatetoProps, mapDispatchToProps);
export default hof(MyProfile);
// export default MyProfile
