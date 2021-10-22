import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";

export class InitializeReduxState extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (this.props.isLoggedIn) {
      alert("");
      this.props.getAllUsers();
      this.props.getallphysiciandata();
      this.props.getAllPatients();
      this.props.getInactiveUsersData();
      this.props.getDemographicsStatus(this.props.currentUser.id);
    }
  }

  componentDidUpdate() {}

  render() {
    return <></>;
  }
}

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    currentUser: state.login.loggedUserInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(actionCreator.GetAllUserData()),
    getallphysiciandata: () => dispatch(actionCreator.GetAllPhysicianData()),
    getAllPatients: () => dispatch(actionCreator.GetAllPatientsData()),
    getInactiveUsersData: () => dispatch(actionCreator.GetInactiveUsers()),
    getDemographicsStatus: (userId) => {
      return dispatch(actionCreator.GetPatientDemographics(userId));
    },
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(InitializeReduxState);
