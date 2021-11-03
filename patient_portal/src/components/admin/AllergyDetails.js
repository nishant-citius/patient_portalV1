import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actioncreators from "../../redux/actions/userActionCreater";
import { Link } from "react-router-dom";
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

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10px",
    height: "100vh",
    width: "100vw",
  },
}));

const AllergyDetails = (props) => {
  const classes = useStyles();
  const [allergy, setAllergy] = useState([0]);

  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell>Allergy Type</TableCell>
              <TableCell>Allergy Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>ALL</TableCell>
              <TableCell>Covide</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>ALL</TableCell>
              <TableCell>Covide</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>ALL</TableCell>
              <TableCell>Covide</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>ALL</TableCell>
              <TableCell>Covide</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AllergyDetails;
