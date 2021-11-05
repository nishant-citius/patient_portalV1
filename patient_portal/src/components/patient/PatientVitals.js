import React from "react";
import { connect } from "react-redux";
import "../admin/admin.css";
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

export class PatientVitals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowPerPage: 6,
      isAvailable: false,
    };
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

  componentDidMount() {
    if (this.props.patientvitalsDetails.length > 0) {
      this.setState({
        isAvailable: true,
      });
    }
  }

  render() {
    return (
      <Container>
        <h4 className="text-center fw-bold text-primary">Patient Vitals</h4>
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table>
            <TableHead className="tablehead">
              <TableRow>
                <TableCell className="tableCell">Height</TableCell>
                <TableCell className="tableCell">Weight</TableCell>
                <TableCell className="tableCell">Blood Pressure</TableCell>
                <TableCell className="tableCell">Temperature</TableCell>
                <TableCell className="tableCell">Pulse</TableCell>
                <TableCell className="tableCell">Respiration</TableCell>
                <TableCell className="tableCell">Oxygen Saturation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {this.state.isAvailable ? (
                  <>
                    <TableCell>
                      {this.props.patientvitalsDetails[0].height}
                    </TableCell>
                    <TableCell>
                      {this.props.patientvitalsDetails[0].weight}
                    </TableCell>
                    <TableCell>
                      {this.props.patientvitalsDetails[0].blood_pressure}
                    </TableCell>
                    <TableCell>
                      {this.props.patientvitalsDetails[0].temperature}
                    </TableCell>
                    <TableCell>
                      {this.props.patientvitalsDetails[0].pulse}
                    </TableCell>
                    <TableCell>
                      {this.props.patientvitalsDetails[0].respiration}
                    </TableCell>
                    <TableCell>
                      {this.props.patientvitalsDetails[0].oxigen_saturation}
                    </TableCell>
                  </>
                ) : (
                  <TableCell>
                    <p className="text text-center fw-bold succeess">
                      No Patient Vitals Available...
                    </p>
                  </TableCell>
                )}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    patientvitalsDetails: rootReducer.getPatientvitals.getPatientvitals,
    globalmessage: rootReducer.getPatientvitals.globalmessage,
    isLoggedIn: rootReducer.login.isLoggedIn,
    currentUser: rootReducer.login.loggedUserInfo,
  };
};

export default connect(mapStateToProps, null)(PatientVitals);
