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
  BsFillArrowLeftSquareFill,
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
    immunizationData: rootReducer.immunizations.immunizations,
    globalmessage: rootReducer.immunizations.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllImmunizations: () =>
      dispatch(actioncreators.GetAllImmunizationData()),
  };
};

export class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowPerPage: 6,
    };
  }

  componentDidMount() {
    this.props.getAllImmunizations();
    // this.props.getalluserdata();
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

  render() {
    return (
      <>
        {/* <div className="container mt-5">
          <Link className="btn btn-warning" to="/admin">
            <BsFillArrowLeftSquareFill />
            <span className="m-2">Back</span>
          </Link>
          <h3 className="text-center fw-bold ">Immunization List</h3>
          <table className="table table-bordered shadow mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Vaccine Name</th>
                <th scope="col">Vaccination Date</th>
                <th scope="col">Vaccine Brand</th>
                <th scope="col">Vaccine Dose Number</th>
              </tr>
            </thead>
            <tbody>
              {this.props.immunizationData.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{`${user.first_name} ${user.last_name}`}</td>
                    <td>
                      <ul className="no-list-style">
                        {user.general_vaccine.map((vac, ind) => {
                          return <li>{vac.vaccine_name}</li>;
                        })}
                      </ul>
                    </td>
                    <td>
                      <ul className="no-list-style">
                        {user.general_vaccine.map((vac, ind) => {
                          return <li>{vac.vaccine_date}</li>;
                        })}
                      </ul>
                    </td>

                    <td>{user.vaccine_brand}</td>
                    <td>{user.dose_detail}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
        <Container>
          <Link className="btn btn-warning" to="/admin">
            <BsFillArrowLeftSquareFill />
            <span className="m-2">Back</span>
          </Link>
          <h3 className="text-center fw-bold ">Immunization List</h3>
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead className="tablehead">
                <TableRow>
                  <TableCell className="tableCell">Sr. No</TableCell>
                  <TableCell className="tableCell">Patient Name</TableCell>
                  <TableCell className="tableCell">Vaccine Name</TableCell>
                  <TableCell className="tableCell">Vaccination Date</TableCell>
                  <TableCell className="tableCell">Vaccine Brand</TableCell>
                  <TableCell className="tableCell">
                    Vaccine Dose Number
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.immunizationData
                  .slice(
                    this.state.page * this.state.rowPerPage,
                    this.state.page * this.state.rowPerPage +
                      this.state.rowPerPage
                  )
                  .map((user, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{`${user.first_name} ${user.last_name}`}</TableCell>
                        <TableCell>
                          <ul className="no-list-style">
                            {user.general_vaccine.map((vac, ind) => {
                              return <li>{vac.vaccine_name}</li>;
                            })}
                          </ul>
                        </TableCell>
                        <TableCell>
                          <ul className="no-list-style">
                            {user.general_vaccine.map((vac, ind) => {
                              return <li>{vac.vaccine_date}</li>;
                            })}
                          </ul>
                        </TableCell>
                        <TableCell>{user.vaccine_brand}</TableCell>
                        <TableCell>{user.dose_detail}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[6, 10, 20, 25]}
              count={this.props.immunizationData.length}
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

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
