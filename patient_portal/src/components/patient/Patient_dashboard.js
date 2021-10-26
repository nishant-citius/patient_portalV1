import {React, useEffect} from "react";
import { Bar,Doughnut} from 'react-chartjs-2';
import { connect } from "react-redux";
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



const Patient_dashboard = (props) => {

  useEffect(() => {
    if (props.isLoggedIn) {
      if (!props.immunizationDetails) {
        return;
      } else {
        console.log("<---AAAAAAAAA--->", props.immunizationDetails);
      }
    }
  }, [props.immunizationDetails, props.isLoggedIn]);
  
  const classes = useStyles();
  console.log(props.immunizationDetails,"after useeffect")
  const {immunizationDetails}=props;
  console.log(immunizationDetails,"immunization details")

  return (
   // const tableHead = Object.keys(props.user.referrerPromos[1]);
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
           { Object.keys(immunizationDetails).map(function(key) {
    // <option value={key}>{immunizationDetails[key]}</option>

                 
                  return(
              <CardContent>
                  <Typography variant="subtitle1" className="fw-bold">
                  {immunizationDetails[key]}
                </Typography>
                <Typography variant="body2" className="fw-bold">
                {/* {immunizations.vaccine_brand} */}vaccine_brand
                </Typography>
                <Typography variant="body2" className="fw-bold">p
                  {/* {immunizations.dose_detail} */}dose_detail
                </Typography>
                <Typography variant="body2" className="fw-bold">
                Dose Details
                </Typography>
                <Typography variant="body2" className="fw-bold">
                Other general Vaccines:
                </Typography>
              </CardContent>
                  
                   )
           }
           )
             }  
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>

                <Typography variant="subtitle1" className="fw-bold">
                 Immunization Details:
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
const mapStateToProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    //allusers: state.immunization.Immunizationsreducer,
    immunizationDetails: state.patientImmunization.patientImmunization,
    isLoggedIn: state.login.isLoggedIn,
  };
};
let hof = connect(mapStateToProps,null);
export default hof(Patient_dashboard);
//export default Patient_dashboard;
