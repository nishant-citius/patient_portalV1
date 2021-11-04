import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allergyServices } from "../../services/allergiesService";
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "80vw",
  },
  tablehead: {
    background: "#b7c1f7",
  },
}));

const AllergyDetails = (props) => {
  const classes = useStyles();
  const [allergy, setAllergy] = useState([0]);
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowsPerPage] = useState(6);

  function getAllergies() {
    allergyServices.getAllAllergies().then(
      (response) => {
        console.log(response);
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
            <TableHead className={classes.tablehead}>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Allergy Type</TableCell>
                <TableCell>Allergy Name</TableCell>
                <TableCell>Allergen Source</TableCell>
                <TableCell>Allerginicity</TableCell>
                <TableCell>Action</TableCell>
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
                            onClick={() => deleteAllergies(allergies.id)}
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
      </Container>
    </>
  );
};

export default AllergyDetails;
