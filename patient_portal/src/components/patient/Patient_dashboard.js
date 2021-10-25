import React from "react";
import { Bar,Doughnut} from 'react-chartjs-2';
import {
  Container,
  Card,
  Grid,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "mui";

const useStyles = makeStyles((theme) => ({
  gridcontainer: {
    background: "#fd7e14",
    color: "#fff",
    textAlign: "center",
    minHeight: "80px",
  },
  chartdiv: {
    // padding: "30px 0 30px 0",
   marginBottom:"0px",
    // margin: "auto"
    // minHeight:"30 px",
    // minWidth:"5px"
  },
  Doughnutdiv:{
    minHeight: "300px",
    minWidth:"500px"
  }
  // },
  // imagelistbar: {
  //   backgroundColor: "#3f51b5",
  //   opacity: "50%",
  // },
}));

const data = {
  labels: [
    "Oct 2020",
    "Nov 2020",
    "Dec 2020",
    "Jan 2021",
    "Feb 2021",
    "March 2021"
    // "Male",
    // "Female"
  ],
  datasets: [
    {
      label: "Outpatients",
      data: [5, 15, 8, 20, 12, 26],
      borderColor: "Red",
      backgroundColor: "Blue",
    },
    {
      label: "Inpatients",
      data: [1, 22, 11, 25, 18, 21],
      borderColor: "Blue",
      backgroundColor: "Red",
    },
    
 ],
};
  // height={400}
  // width={600}

const options = {
  title: {
    maintainAspectRatio:false,
  },
  scales: {
    yAxes: [
      {
        tickes: {
          beginAtZero:true,
        },
      },
    ],
  },
};

const Patient_dashboard = () => {
  const classes = useStyles();
  return (
    <>
     <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography variant="subtitle1" className="fw-bold">
                  New Patients
                </Typography>
              </CardContent>
              {/* <CardActionArea>{props.users.length}</CardActionArea> */}
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography variant="subtitle1" className="fw-bold">
                  Old Patients
                </Typography>
              </CardContent>
              {/* <CardActionArea>{props.patients.length}</CardActionArea> */}
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography variant="subtitle1" className="fw-bold">
                 Discharges
                </Typography>
              </CardContent>
              {/* <CardActionArea>{props.physicians.length}</CardActionArea> */}
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item sm={4} xs={12}>
            <Card className={classes.chartdiv}>
              <CardContent>
                 <div>
                  <Bar data={data} options={options}></Bar>
                      </div>
                      
                      <div>
                      
                  <Doughnut data={data} options={options}></Doughnut>
                      </div>
                      
                </CardContent>
               </Card>
              </Grid>
            </Grid>
          </Container>      
                </>
  );
};

export default Patient_dashboard;
