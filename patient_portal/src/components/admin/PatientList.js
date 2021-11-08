import React, { useState, useEffect } from "react";
import "./admin.css";
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
import {
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
import ConfirmDialog from "../../shared/dialog/ConfirmDialog";

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

function PatientList(props) {
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowsPerPage] = useState(6);
  const [detailFetched, setDetailsFetched] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const onPageChange = (event, nextPage) => {
    setPage(nextPage);
  };

  const onChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };
  
  useEffect(() => {
    fetchUserDetails();
  });

  function fetchUserDetails() {
    if (detailFetched) {
      return;
    } else {
      props.getAllPatients();
      props.getDemographics();
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
      message: "Patient Deleted Successfully...!",
      type: "success",
    });

    props.getAllPatients();
  }

  return (
    <>
      <Container>
        <h4 className="text-center fw-bold ">Patient List</h4>
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
                <TableCell className="tableCell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.patientData
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
                            // onClick={() => deleteUser(user.id)}
                            onClick={() => {
                              setConfirmDialog({
                                isOpen: true,
                                title: "Are you sure to delete this Patient?",
                                subTitle:
                                  "Patient Record will be removed permanently!!",
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
            count={props.patientData.length}
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
    </>
  );
}
// }

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
