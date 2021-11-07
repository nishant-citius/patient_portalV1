import React from "react";
import { connect } from "react-redux";
import * as actioncreators from "../../redux/actions/userActionCreater";
import { Link } from "react-router-dom";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsPersonFill,
  BsCheckCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import "./admin.css";
import {
  makeStyles,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "mui";

const mapStateToProps = (rootReducer) => {
  return {
    physiciandata: rootReducer.physicians.physicians,
    globalmessage: rootReducer.physicians.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPhysicians: () => dispatch(actioncreators.GetAllPhysicianData()),
    removeUser: (id) => dispatch(actioncreators.DeleteUser(id)),
  };
};

export class PhysicianDataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowPerPage: 6,
    };
  }

  componentDidMount() {
    this.props.getAllPhysicians();
  }

  onPageChange = (event, nextPage) => {
    this.setState({
      ...this.state,
      page: nextPage,
    });
  };

  onChangeRowsPerPage = (event) => {
    this.setState({
      ...this.state,
      rowPerPage: event.target.value,
    });
  };

  deleteUser(userId) {
    this.props.removeUser(userId);
    this.props.flashNotification({
      message: "Physician Deleted Successfully...!",
      type: "success",
    });
    this.props.getAllPhysicians();
  }

  render() {
    return (
      <>
        <Container>
          <h4 className="text-center fw-bold ">Physician List</h4>
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead className="tablehead">
                <TableRow>
                  <TableCell className="tableCell">Sr. No</TableCell>
                  <TableCell className="tableCell">Name</TableCell>
                  <TableCell className="tableCell">Speciality</TableCell>
                  <TableCell className="tableCell">Email</TableCell>
                  <TableCell className="tableCell">Phone</TableCell>
                  <TableCell className="tableCell">Status</TableCell>
                  <TableCell className="tableCell">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.physiciandata
                  .slice(
                    this.state.page * this.state.rowPerPage,
                    this.state.page * this.state.rowPerPage +
                      this.state.rowPerPage
                  )
                  .map((user, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{`${user.fName} ${user.lName}`}</TableCell>
                        <TableCell>{user.speciality}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.mobile}</TableCell>
                        <TableCell>
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
                        </TableCell>
                        <TableCell>
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
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[6, 10, 20, 25]}
              count={this.props.physiciandata.length}
              rowsPerPage={this.state.rowPerPage}
              page={this.state.page}
              onPageChange={this.onPageChange}
              onChangeRowsPerPage={this.onChangeRowsPerPage}
            />
          </TableContainer>
        </Container>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhysicianDataComponent);
