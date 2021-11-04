import React from "react";
import { connect } from "react-redux";
import * as actioncreators from "../../redux/actions/userActionCreater";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsPersonFill,
  BsCheckCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";

const mapStateToProps = (rootReducer) => {
  return {
    patientData: rootReducer.patients.patients,
    demographicData: rootReducer.getalldemographics.demographics,
    globalmessage: rootReducer.patients.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPatients: () => dispatch(actioncreators.GetAllPatientsData()),
    removeUser: (id) => dispatch(actioncreators.DeleteUser(id)),
    getDemographics: () => dispatch(actioncreators.GetAllDemographicsData()),
  };
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    this.props.getDemographics();
  }

  deleteUser(userId) {
    this.props.removeUser(userId);
    this.props.flashNotification({
      message: "Patient Deleted Successfully...!",
      type: "success",
    });
    this.props.getAllPatients();
  }

  render() {
    let handleChange = (event, newValue) => {
      this.setState({
        value: newValue,
      });
    };
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={this.state.value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Patient List" {...a11yProps(0)} />
              <Tab label="Demographics" {...a11yProps(1)} />
              <Tab label="Lab Reports" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={this.state.value} index={0}>
            <div className="container">
              <h4 className="text-center fw-bold ">Patient List</h4>
              <table className="table table-bordered shadow mt-4">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">D.O.B.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.patientData.map((user, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{`${user.fName} ${user.lName}`}</td>
                        <td>{user.dob}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>
                          {user.isActive ? (
                            <>
                              <BsCheckCircleFill className="hand-pointer" />
                              <span className="p-2">Active</span>
                            </>
                          ) : (
                            <>
                              <BsFillXCircleFill className="hand-pointer" />
                              <span className="p-2">Inactive</span>
                            </>
                          )}
                        </td>
                        <td>
                          <span className="p-2">
                            <Link to={`/userdetails/${user.id}`}>
                              <BsPersonFill />
                            </Link>
                          </span>
                          <span className="p-2">
                            <Link to={`/edit/${user.id}`}>
                              <BsFillPencilFill />
                            </Link>
                          </span>
                          <span className="p-2 hand-pointer">
                            <BsFillTrashFill
                              onClick={() => this.deleteUser(user.id)}
                            />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel value={this.state.value} index={1}>
            <div className="container">
              <h4 className="text-center fw-bold ">Demographics List</h4>
              <table className="table table-bordered shadow mt-4">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">D.O.B.</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Education</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.demographicData.map((demo, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{`${demo.fName} ${demo.lName}`}</td>
                        <td>{demo.dob}</td>
                        <td>{demo.gender}</td>
                        <td>{demo.education}</td>
                        <td>
                          <span className="p-2">
                            <Link>
                              <BsPersonFill />
                            </Link>
                          </span>
                          <span className="p-2">
                            <Link>
                              <BsFillPencilFill />
                            </Link>
                          </span>
                          <span className="p-2 hand-pointer"></span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel value={this.state.value} index={2}>
            <h1>Lab Reports</h1>
          </TabPanel>
        </Box>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
