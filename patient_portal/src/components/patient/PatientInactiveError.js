import React from "react";
import {
  Container,
  Card,
  Grid,
  Typography,
  Button,
  CardActionArea,
  CardContent,
} from "mui";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "50px",
  },
  gridcontainer: {
    // background: "#f50057",
    color: "#000",
    textAlign: "center",
    minHeight: "100px",
  },
  chartdiv: {
    padding: "40px 0 40px 0",
    margin: "auto",
    maxWidth: "700px",
  },
  detaildiv: {
    minHeight: "220px",
  },
  cardsheight: {
    minHeight: "110px",
  },
}));

function PatientInactiveError() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item md={0} sm={0} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography variant="subtitle1" className="fw-bold">
                  User Id not yet approved by Admin. Try Logging after some
                  time.
                </Typography>
              </CardContent>
              <CardActionArea></CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PatientInactiveError;
