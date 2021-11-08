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
      this.props.getAllUsers();
      this.props.getallphysiciandata();
      this.props.getAllPatients();
      this.props.getInactiveUsersData();
      this.props.getApprovedAppointmentData();
      this.props.getPatientDemographics(this.props.currentUser.id);
      // if (this.props.role === "patient") {
      this.props.getPatientImmunization(this.props.currentUser.id);
      this.props.getVitals(this.props.currentUser.id);
      this.props.getDietPlan(this.props.currentUser.id);
      this.props.getMedicationAllergies(this.props.currentUser.id);
      this.props.getPendingAppointmentData();
      // }
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
    role: state.login.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(actionCreator.GetAllUserData()),
    getallphysiciandata: () => dispatch(actionCreator.GetAllPhysicianData()),
    getAllPatients: () => dispatch(actionCreator.GetAllPatientsData()),
    getInactiveUsersData: () => dispatch(actionCreator.GetInactiveUsers()),
    getApprovedAppointmentData: () =>
      dispatch(actionCreator.GetApprovedAppointment()),
    getPatientDemographics: (userId) =>
      dispatch(actionCreator.GetPatientDemographics(userId)),
    getPatientImmunization: (userId) =>
      dispatch(actionCreator.GetPatientImmunization(userId)),
    getVitals: (userId) => dispatch(actionCreator.GetVitals(userId)),
    getDietPlan: (userId) => dispatch(actionCreator.GetDietPlan(userId)),
    getMedicationAllergies: (userId) =>
      dispatch(actionCreator.GetMedicationAllergies(userId)),
    getPendingAppointmentData: () =>
    dispatch(actionCreator.GetPendingAppointment()),
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(InitializeReduxState);
