import { render } from "@testing-library/react";
import { Container } from "mui";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import DefaultUserpic from "../../images/user.png";
import * as actions from "../../redux/actions/userActionCreater";


class MyProfile extends Component{
   constructor(props){
     super(props)
     this.state={
       fName:this.props.fName,
       lName:this.props.lName,
       email: this.props.email,
       mobile:this.props.mobile,
       dob: this.props.dob,
       blood_group:this.props.blood_group,
       profileImage:this.props.profileImage,
      //  username:this.props.username,
      //  role:this.props.role,
      //  password:this.props.password,
      //  repassword:this.props.repassword,
       uploadedFile:null
       }
   }

   updateprofilehandler= (e,id)=>{
       e.preventDefault();
       //create object of formData
       const formData= new FormData();
       formData.append("profileImage", this.state.uploadedFile);
       this.props.adduser(this.state.uploadedFile)
   };

   profilechange = (e) =>{
    console.log(e.target.files[0])
     this.setState(
       {
         uploadedFile: e.target.files[0]
     });
   }

  render(){
    if (this.state.profileImage){
      var profilePic = this.state.profileImage
    }else{
      profilePic = DefaultUserpic
    }
    return(
      <Container>
        <Row>
          <Col>
          <img src={profilePic} alt="profilepic" width="190" />
          </Col>
          <Col>
        <form>
          <div class="form-group">
            <label>First Name</label>
             <input type="text" class="form-control" value={this.state.fName}/>
          </div>

          <div class="form-group">
            <label>Last Name</label>
             <input type="text" class="form-control" value={this.state.lName}/>
          </div>

        <div class="form-group ">
          <label>Email</label>
          <input type="text" class="form-control" value={this.state.email}/>
        </div>

        <div class="form-group">
          <label>Mobile no</label>
           <input type="number" class="form-control" value={this.state.mobile}/>
         </div>

         <div class="form-group">
          <label>D.O.B:</label>
           <input type="dob" class="form-control" value={this.state.dob}/>
         </div>

         <div class="form-group">
          <label>Blood Group:</label>
           <input type="blood_group" class="form-control" value={this.state.blood_group}/>
         </div>

         
         <div class="form-group">
          <label>Profile Image:</label>
           <input type="file"  name="profileImage"  onChange={this.profilechange} class="form-control"/>
         </div>
          <br/>
         <button type="submit"  onClick={this.updateprofilehandler} className="btn btn-primary mt-2">Update Profile</button>
        </form>
      </Col>
    </Row>
</Container>
    )
}
}
const mapStatetoProps = (state) => {
  return {
    
    fName: state.login.loggedUserInfo.fName,
    lName: state.login.loggedUserInfo.lName,
    mobile : state.login.loggedUserInfo.mobile,
    email: state.login.loggedUserInfo.email,
    profileImage: state.login.loggedUserInfo.profileImage,
    dob:state.login.loggedUserInfo.dob,
    blood_group: state.login.loggedUserInfo.blood_group,
    // username:state.login.loggedUserInfo.username,
    // role:state.login.loggedUserInfo.role,
    // password:state.login.loggedUserInfo.password,
    // repassword:state.login.loggedUserInfo.repassword

    // userinfo:state.login.loggedUserInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adduser: (userinfo) => dispatch(actions.updateprofile(userinfo)),
  };
};


let hof = connect(mapStatetoProps, mapDispatchToProps);
export default hof(MyProfile);
// export default MyProfile