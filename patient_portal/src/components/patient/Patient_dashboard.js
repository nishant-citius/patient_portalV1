import React from "react";
import { Bar,Doughnut} from 'react-chartjs-2';
import {
  Container,
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Divider,
  makeStyles,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "mui";
import { propTypes } from "react-bootstrap/esm/Image";

const useStyles = makeStyles((theme) => ({
  gridcontainer: {
    background: "#fff",
    color: "#808080",
    textAlign: "center",
    minHeight: "250px",
    minWidth:"50px"
    
  },
  chartdiv: {
    // padding: "30px 0 30px 0",
   marginBottom:"0px",
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

const Patient_dashboard = () => {
  const classes = useStyles();
  return (
    <>
     <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                
                <Typography variant="subtitle1" className="fw-bold" >
                  Vitals Details:
                </Typography>
                <Typography variant="body2" className="fw-bold mb-2 mt-2" >
                 <span style={{float:"left"}}>Height</span>: <span style={{float:"right"}}>160 cm</span>
                </Typography>
                {/* <Typography variant="body2" className="fw-bold" >
                 160cm
                </Typography> */}
                <Divider/>
                
                <Typography variant="body2" className="fw-bold mb-2 mt-2">
               <span style={{float:"left"}}>Weight</span>:<span style={{float:"right"}}>70 kg</span> 
                </Typography>
                <Divider/>
                <Typography variant="body2" className="fw-bold mb-2 mt-2">
               <p> <span style={{float:"left"}}>blood pressure</span>: <span style={{float:"right"}}>90mhg</span></p>
                </Typography>
                <Divider/>
                <Typography variant="body2" className="fw-bold mb-2 mt-2">
                <span style={{float:"left"}}> Pulse</span>: <span style={{float:"right" }}>89/m</span>
                </Typography>
              </CardContent>
              {/* <CardActionArea>{props.users.length}</CardActionArea> */}
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography variant="subtitle1" className="fw-bold">
                  Current Medication
                </Typography>
                <Typography variant="body2" className="fw-bold">
                  Medicine name:
                </Typography>
                <Typography variant="body2" className="fw-bold">
                  Dosages:
                </Typography>
                <Typography variant="body2" className="fw-bold">
                  Physician Name:
                </Typography>
                <Typography variant="body2" className="fw-bold">
                  Purpose:
                </Typography>
              </CardContent>
              {/* <CardActionArea>{props.patients.length}</CardActionArea> */}
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography variant="subtitle1" className="fw-bold">
                 Allergies
                </Typography>
              </CardContent>
              {/* <CardActionArea>{props.physicians.length}</CardActionArea> */}
            </Card>
          </Grid>
        </Grid>
      </Container>
                </>
  );
};

export default Patient_dashboard;
