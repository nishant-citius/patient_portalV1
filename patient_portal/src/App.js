import "./App.css";
import React from "react";
import { connect } from "react-redux";
////////////////////////////////////////////////////////////////
import "./App.css";
import { Grid } from "./mui";
import AppToolBar from "./navigation/AppToolBar";
import SideNav from "./navigation/SideNav";
import ShellComponent from "./components/ShellComponent";
/////////////////////////////////////////////////////////////////

const mapStateToProps = (rootReducer) => {
  return {
    isLoggedIn: rootReducer.login.isLoggedIn,
    role: rootReducer.login.role,
    authToken: rootReducer.login.authToken,
  };
};

function App(props) {
  return (
    <>
      <div>
        <AppToolBar />
        {props.isLoggedIn === false ? (
          <React.Fragment>
            <Grid container>
              <Grid item sm={12} xs={12}>
                <ShellComponent />
              </Grid>
            </Grid>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Grid container>
              <Grid item sm={2} xs={2}>
                <SideNav />
              </Grid>
              <Grid item sm={10} xs={10}>
                <ShellComponent />
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </div>
    </>
  );
}
export default connect(mapStateToProps, null)(App);
