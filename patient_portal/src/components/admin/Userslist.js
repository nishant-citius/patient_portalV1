import React, { useState, useEffect } from "react";
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
import Preloader from "../../shared/preloder/Preloder";
import ConfirmDialog from "../../shared/dialog/ConfirmDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "80vw",
  },
}));

const mapStateToProps = (rootReducer) => {
  return {
    users: rootReducer.getallusers.users,
    globalmessage: rootReducer.getallusers.globalmessage,
    demographics: rootReducer.patientDemographics.patientDemographics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getalluserdata: () => dispatch(actioncreators.GetAllUserData()),
    removeUser: (id) => dispatch(actioncreators.DeleteUser(id)),
  };
};

function UserList(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowsPerPage] = useState(6);
  const [detailFetched, setDetailsFetched] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  useEffect(() => {
    fetchUserDetails();
  });

  function fetchUserDetails() {
    if (detailFetched) {
      return;
    } else {
      props.getalluserdata();
      setDetailsFetched(true);
    }
  }

  function deleteUser(userId) {
    props.removeUser(userId);
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    props.flashNotification({
      message: "User Deleted Successfully...!",
      type: "success",
    });
    props.getalluserdata();
  }

  const onPageChange = (event, nextPage) => {
    setPage(nextPage);
  };

  const onChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <>
      {detailFetched ? (
        <Container className={classes.root}>
          <Link to={`/addusers`} className="btn btn-primary float-end mr-4">
            Add User
          </Link>
          <h4 className="text-center  fw-bold ">User List</h4>
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead className="tablehead">
                <TableRow>
                  <TableCell className="tableCell">Sr. No</TableCell>
                  <TableCell className="tableCell">Name</TableCell>
                  <TableCell className="tableCell">D.O.B.</TableCell>
                  <TableCell className="tableCell">Email</TableCell>
                  <TableCell className="tableCell">Phone</TableCell>
                  <TableCell className="tableCell">Status</TableCell>
                  <TableCell className="tableCell">Role</TableCell>
                  <TableCell className="tableCell">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.users
                  .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                  .map((user, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{`${user.fName} ${user.lName}`}</TableCell>
                        <TableCell>{user.dob}</TableCell>
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
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <span className="p-2">
                            {/* <Link to={`/userdetails/${user.id}`}> */}

                            <Link
                              to={{
                                pathname: `/userdetails/${user.id}`,
                                state: { user: user },
                              }}
                            >
                              <BsPersonFill />
                            </Link>
                            {/* to=
                      {{
                        pathname: `/attendAppointment/${appointments.patientId}`,
                        state: { appointmentDetails: appointments },
                      }} */}
                          </span>
                          <span className="p-2">
                            <Link to={`/edit/${user.id}`}>
                              <BsFillPencilFill />
                            </Link>
                          </span>
                          <span className="p-2 hand-pointer">
                            <BsFillTrashFill
                              // onClick={() => deleteUser(user.id)}
                              onClick={() => {
                                setConfirmDialog({
                                  isOpen: true,
                                  title: `Are you sure to delete this ${user.role} record?`,
                                  subTitle:
                                    "User Record will be removed permanently!!",
                                  onConfirm: () => {
                                    deleteUser(user.id);
                                  },
                                });
                              }}
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
              count={props.users.length}
              rowsPerPage={rowPerPage}
              page={page}
              onPageChange={onPageChange}
              onChangeRowsPerPage={onChangeRowsPerPage}
            />
          </TableContainer>
          <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
        </Container>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
