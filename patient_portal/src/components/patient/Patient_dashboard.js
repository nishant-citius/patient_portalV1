import {React, useEffect} from "react";
import { Bar,Doughnut} from 'react-chartjs-2';
import { connect } from "react-redux";
import {
  DirectionsWalkIcon,
  DirectionsBikeIcon,
  DirectionsRunIcon,
  PoolIcon
} from "mui-icons";
import {
  Container,
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Divider,
  CardMedia,
  
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
    // minHeight: "250px",
    // minWidth:"700px",
    paddingLeft:"15px"
    
    },
  innercard1:{
    maxWidth: "320px" ,
    maxHeight:"100px",
    margin: "4px",
    background:"#D3D3D3"
  },
  innercard2:{
    maxWidth: "150px" ,
    maxHeight:"100px",
    margin: "4px",
    background:"#D3D3D3"
  },
  display:{
   display:"flex"
  },
  h4:{
   paddingLeft:"38px",
   color:"blue"
  },
  // h5:{
  //   paddingLeft:"20px",
  // }
  // card:{
  //   pb:"6px"
  // }

  // chartdiv: {
  //   // padding: "30px 0 30px 0",
  //  marginBottom:"0px",
  // },
  // Doughnutdiv:{
  //   minHeight: "300px",
  //   minWidth:"500px"
  // }
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


  return (
    <>
       <Container className={classes.container}>
        <Grid container spacing={2}>
         <Grid item sm={4} lg={4} md={4}>
          <h4 className={classes.h4}>Vitals</h4>
            <Card className={classes.gridcontainer}>
             <CardContent>
              <Typography variant="subtitle1" className="fw-bold">
                </Typography>
                
                <div className={classes.display}>
                <Card className={classes.innercard1} >
                  <CardContent>
                    <Typography variant="subtitle1" className="">
                      Body Temp
                        <br/>
                        <b>98.4 </b><br/>C
                        </Typography>
                  </CardContent>
                </Card>

               <Card className={classes.innercard1} >
                 <CardContent>
                   <Typography variant="subtitle1">
                   Blood press
                    <br/>
                    <b>80/70</b><br/>mmhg
                   </Typography>
                 </CardContent>
              </Card>
            </div>
    
             <div className={classes.display}> 
             <Card className={classes.innercard1} style={{ backgroundColor: "#93E9BE" }}>
               <CardContent>
                 <Typography variant="subtitle1">
                   Pulse Rate
                    <br/>
                      <b>85</b><br/>bpm
                 </Typography>
               </CardContent>
              
             </Card>
             <Card className={classes.innercard1}>
               <CardContent>
                 <Typography variant="subtitle1">
                   Respiration
                    <br/>
                      <b>15</b><br/>breaths/m
                 </Typography>
               </CardContent>
             </Card>
          </div>
        </CardContent>
    </Card>
  </Grid>

     <Grid item sm={4} md={4} lg={4}>
       <h4 className={classes.h4}>Current Medication</h4>
         <Card className={classes.gridcontainer}>
           <CardContent>
             <Typography variant="subtitle1" className="fw-bold">
               </Typography>
                <div className={classes.display}>
                  <Card className={classes.innercard2} >
                    <CardContent>
                      <Typography variant="subtitle1" className="">
                      <b>Medicine Name</b><br/>
                      Paracetamol
                      </Typography>
                    </CardContent>
                   </Card>
                  <Card className={classes.innercard2} >
                    <CardContent>
                      <Typography variant="subtitle1">
                        <b>Dosages</b><br/>
                         2 times
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div className={classes.display}> 
                  <Card className={classes.innercard2} style={{ backgroundColor: "#93E9BE" }}>
                     <CardContent>
                       <Typography variant="subtitle1">
                          <b>Physician Name</b><br/>
                             Dr ABC
                              <br/>
                        </Typography>
                      </CardContent>
                  </Card>
                  <Card className={classes.innercard2}>
                     <CardContent>
                       <Typography variant="subtitle1">
                         <b>Frequency</b><br/>
                         200 mg
                       </Typography>
                     </CardContent>
                  </Card>
               </div>
                    </CardContent>
                </Card>
           </Grid>
        <Grid item sm={4} lg={4} md={4}>
        <h4 className={classes.h4}>Patient Details</h4>
         <Card>
            <CardMedia
            component="img"
            height="140"
           image="src/images/user.png"
           />
          
           <h5 className={classes.h5}>Details</h5>
           
          <CardContent >
          <Typography  component="div">
           Name: jay
         </Typography>
         <Typography  component="div">
           Age: 27
         </Typography>
         </CardContent>
      </Card>
    </Grid>
  </Grid>
</Container>  
    <Container className={classes.container} className="mt-2">
    <Grid container spacing={2}>
      <Grid item sm={2} lg={2} md={2}>
       <h4 className={classes.h4} >Allergies</h4>
         <Card className={classes.gridcontainer}>
           <CardContent>
             <Typography variant="subtitle1" className="fw-bold">
               </Typography>
                <div className={classes.display}>
                  <Card className={classes.innercard2} >
                    <CardContent>
                      <Typography variant="subtitle1" className="">
                      <b>Allergy Name</b><br/>
                       skin allergy 
                      </Typography>
                    </CardContent>
                   </Card>
                </div>
            </CardContent>
        </Card>
    </Grid>
     <Grid item sm={6} lg={6} md={6}>
       <h4 className={classes.h4} >Activities</h4>
        <Card>
           <CardContent>
              <Container>
                 <Grid container spacing={2}>
                    <Grid item>
                       <Card className={classes.gridcontainer}>
                          <CardContent>
                             <DirectionsWalkIcon>
                               </DirectionsWalkIcon>
                                 <Typography variant="subtitle1"  color="black">
                                      Walk<br/>
                                       2 hours daily
                                 </Typography>
                          </CardContent>
                        </Card>
                     </Grid>
      <Grid item>   
        <Card className={classes.gridcontainer}>
           <CardContent>
              <DirectionsBikeIcon></DirectionsBikeIcon>
                <Typography variant="subtitle1"  color="black">
                   Cycling<br/>
                    30 mins daily
                </Typography>
            </CardContent>
        </Card>
        </Grid>
        </Grid>
           {/* <Grid container spacing={2}>
              <Grid item>  
                <Card className={classes.gridcontainer}>
                   <CardContent>
                    <DirectionsRunIcon></DirectionsRunIcon>
                     <Typography variant="subtitle1"  color="black">
                       Running<br/>
                       20 mins<br/>
                       Daily
                     </Typography>
                   </CardContent>
                </Card>
              </Grid>
        <Grid item>  
          <Card className={classes.gridcontainer}>
             <CardContent>
               <PoolIcon></PoolIcon>
                 <Typography variant="subtitle1"  color="black">
                  Swimming<br/> 
                  30 mins<br/>  Alternate Days
                 </Typography>
             </CardContent>
          </Card>
         </Grid>
            </Grid> */}
              </Container>
               </CardContent>
                   </Card>
                     </Grid>
           
        <Grid item sm={4} lg={4} md={4}>
         <h4 className={classes.h4} >Past Medication</h4>
         <Card>
           <CardContent>
             <Grid container spacing={4}>
               <Grid item>
         <Card className={classes.gridcontainer}>
           <CardContent>
             <Typography variant="subtitle1" className="fw-bold">
                <b>Drug Name</b><br/>
                 Antibiotics
               </Typography>
               </CardContent>
               </Card>
              </Grid>
              <Grid item>
           <Card className={classes.gridcontainer}>
           <CardContent>
             <Typography variant="subtitle1" className="fw-bold">
                Strength<br/>
                500 mg
               </Typography>
               </CardContent>
               </Card>
            </Grid>
            </Grid>
            </CardContent>
            </Card>
           </Grid>
           </Grid>
       
    </Container>
    
       
          


    
  


     {/* <Container className={classes.container}>
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
            
            </Card>
          </Grid>

          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                  <Typography variant="subtitle1" className="fw-bold">
                  age_category
                </Typography>
                <Typography variant="body2" className="fw-bold">
                vaccine_brand
                </Typography>
                <Typography variant="body2" className="fw-bold">p
                 dose_detail
                </Typography>
                <Typography variant="body2" className="fw-bold">
                Dose Details
                </Typography>
                <Typography variant="body2" className="fw-bold">
                Other general Vaccines:
                </Typography>
              </CardContent>
               
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>

                <Typography variant="subtitle1" className="fw-bold">
                 Immunization Details:
                </Typography>
              </CardContent>
              
            </Card>
          </Grid>
        </Grid>
      </Container> */}
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
