import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allergyServices } from "../../services/allergiesService";
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
import { BsFillTrashFill } from "react-icons/bs";
import ConfirmDialog from "../../shared/dialog/ConfirmDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "80vw",
  },
}));

const AllergyDetails = (props) => {
  const classes = useStyles();
  const [allergy, setAllergy] = useState([0]);
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowsPerPage] = useState(6);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  function getAllergies() {
    allergyServices.getAllAllergies().then(
      (response) => {
        setAllergy(response.data);
      },
      (error) => {
        return;
      }
    );
  }

  useEffect(() => {
    getAllergies();
  }, []);

  function deleteAllergies(id) {
    allergyServices.deleteAllergy(id).then(
      (response) => {
        setConfirmDialog({
          ...confirmDialog,
          isOpen: false,
        });
        props.flashNotification({
          message: "Data Deleted Succssfully...!",
          type: "success",
        });
        getAllergies();
      },
      (error) => {
        props.flashNotification({
          message: "Data Not Deleted..!",
          type: "error",
        });
      }
    );
  }

  const onPageChange = (event, nextPage) => {
    setPage(nextPage);
  };
  const onChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <>
      <Container className={classes.root}>
        <Link to={`/addallergy`} className="btn btn-primary float-end">
          Add Allergy
        </Link>
        <h4 className="text-center fw-bold ">Allergy List</h4>
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table>
            <TableHead className="tablehead">
              <TableRow>
                <TableCell className="tableCell">Id</TableCell>
                <TableCell className="tableCell">Allergy Type</TableCell>
                <TableCell className="tableCell">Allergy Name</TableCell>
                <TableCell className="tableCell">Allergen Source</TableCell>
                <TableCell className="tableCell">Allerginicity</TableCell>
                <TableCell className="tableCell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allergy
                .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                .map((allergies, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{allergies.id}</TableCell>
                      <TableCell>{allergies.AllergyType}</TableCell>
                      <TableCell>{allergies.AllergyName}</TableCell>
                      <TableCell>{allergies.AllergenSource}</TableCell>
                      <TableCell>{allergies.Allerginicity}</TableCell>
                      <TableCell>
                        <span className="p-2 hand-pointer">
                          <BsFillTrashFill
                            // onClick={() => deleteAllergies(allergies.id)}
                            onClick={() => {
                              setConfirmDialog({
                                isOpen: true,
                                title: `Are you sure to delete this record?`,
                                subTitle:
                                  "Allergy Record will be removed permanently!!",
                                onConfirm: () => {
                                  deleteAllergies(allergies.id);
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
            count={allergy.length}
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
};

export default AllergyDetails;
