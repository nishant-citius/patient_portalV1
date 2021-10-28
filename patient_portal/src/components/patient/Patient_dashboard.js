import {React, useEffect} from "react";
import { connect } from "react-redux";
import {
  DirectionsWalkIcon,
  DirectionsBikeIcon,
  DirectionsRunIcon
} from "mui-icons";
import {
  Container,
  Card,
  Grid,
  CardContent,
  Divider,
  CardMedia,
  makeStyles,
  Typography
} from "mui";

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
    background:"rgb(72 179 226)",
  },
  innercard2:{
    minWidth: "100px" ,
    minHeight:"100px",
    margin: "4px",
    background:"rgb(72 179 226)"
  },
  innercard:{
    height:"185px"
  },
  innercard3:{
    background:"#D3D3D3"
  },
  innercard4:{
    width: "105px",
    textAlign:"center"
  },
  h5:{
   textAlign:"center",
   color:"blue"
  },
  height:{
    height:"150px"
  }
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
          <h5 className={classes.h5}>Vitals</h5>
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
             <Card className={classes.innercard1}>
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
       <h5 className={classes.h5}>Current Medication</h5>
         <Card className={classes.gridcontainer}>
           <CardContent>
             <Typography variant="subtitle1" >
               </Typography>
                <div className={classes.display}>
                  <Card className={classes.innercard2} style={{ backgroundColor: "rgb(62 222 182)" }}>
                    <CardContent>
                      <Typography variant="subtitle1">
                      Medicine Name<br/>
                     <b>Paracetamol</b>
                      </Typography>
                    </CardContent>
                   </Card>
                  <Card className={classes.innercard2} style={{ backgroundColor: "rgb(62 222 182)" }}>
                    <CardContent>
                      <Typography variant="subtitle1">
                        Dosages<br/>
                         <b>2 times</b>
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div className={classes.display}> 
                  <Card className={classes.innercard2} style={{ backgroundColor: "rgb(62 222 182)" }}>
                     <CardContent>
                       <Typography variant="subtitle1">
                          Physician Name<br/>
                            <b> Dr ABC</b>
                              <br/>
                        </Typography>
                      </CardContent>
                  </Card>
                  <Card className={classes.innercard2} style={{ backgroundColor: "rgb(62 222 182)" }}>
                     <CardContent>
                       <Typography variant="subtitle1">
                         Frequency<br/>
                         <b>200 mg</b>
                       </Typography>
                     </CardContent>
                  </Card>
               </div>
           </CardContent>
        </Card>
    </Grid>
        <Grid item sm={4} lg={4} md={4}>
        <h5 className={classes.h5}>Patient Details</h5>
         <Card>
            <CardMedia
             component="img"
             height="250"
             image="https://healthtechmagazine.net/sites/healthtechmagazine.net/files/styles/cdw_hero/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/201911/20191127_HT_Web_Perfcon_EHR-Patient-Care.jpg?itok=xzDl3EQW"
           />
           <CardContent >
            <h6 className={classes.h6}>Details</h6>
            <Divider/>
            <br/>
            <Typography  component="div">
              username: jay
            </Typography>
            <Typography  component="div">
              email: <span paddingLeft="9px">27</span>
            </Typography>
            <Typography  component="div">
              dob: <span paddingLeft="9px">27</span>
            </Typography>
            <Typography  component="div">
             mobile: <span paddingLeft="9px">27</span>
           </Typography>
            <Typography  component="div">
             blood_group: <span paddingLeft="9px">27</span>
           </Typography>
          </CardContent>
       </Card>
     </Grid>
   </Grid>
</Container>  
    <Container className={classes.container} className="mt-2">
    <Grid container spacing={2}>
      <Grid item sm={2} lg={2} md={2}>
       <h5 className={classes.h5} >Allergies</h5>
         <Card className={classes.gridcontainer}>
           <CardContent>
             <Typography variant="subtitle1">
               </Typography>
                <div className={classes.display}>
                  <Card className={classes.innercard3} >
                    <CardContent>
                      <Typography variant="subtitle1" className="">
                      Allergy Name<br/>
                       <b>skin allergy</b> 
                      </Typography>
                    </CardContent>
                   </Card>
                </div>
            </CardContent>
        </Card>
    </Grid>
     <Grid item sm={6} lg={6} md={6}>
       <h5 className={classes.h5}>Activities</h5>
        <Card>
           <CardContent>
              <Container>
                 <Grid container spacing={6}>
                    <Grid item>
                       <Card style={{ backgroundColor: "rgb(62 222 182)" }} className={classes.innercard4}>
                          <CardContent>
                             <DirectionsWalkIcon>
                               </DirectionsWalkIcon>
                                 <Typography variant="subtitle1"  color="black">
                                     Walk<br/>
                                       2 hours <br/>daily
                                 </Typography>
                          </CardContent>
                        </Card>
                     </Grid>
      <Grid item>   
        <Card style={{ backgroundColor: "rgb(62 222 182)" }} className={classes.innercard4}>
           <CardContent>
              <DirectionsBikeIcon></DirectionsBikeIcon>
                <Typography variant="subtitle1"  color="black">
                   Cycling<br/>
                    30 mins<br/> daily
                </Typography>
            </CardContent>
        </Card>
        </Grid>
        <Grid item>  
                <Card style={{ backgroundColor: "rgb(62 222 182)" }} className={classes.innercard4}> 
                   <CardContent>
                    <DirectionsRunIcon></DirectionsRunIcon>
                     <Typography variant="subtitle1"  color="black">
                       Running<br/>
                       20 mins <br/>daily
                      
                     </Typography>
                   </CardContent>
                </Card>
              </Grid>
        </Grid>
           </Container>
               </CardContent>
                   </Card>
                     </Grid>
       <Grid item sm={4} lg={4} md={4}>
         <h4 className={classes.h5}>Past Medication</h4>
           <Card className={classes.innercard}>
             <CardContent>
               <Grid container spacing={4}>
                 <Grid item>
                   <Card style={{ backgroundColor: "#D3D3D3" }} className={classes.height}>
                     <CardContent>
                        <Typography variant="subtitle1">
                         Drug Name<br/>
                         <b> Antibiotics</b>
                        </Typography>
                     </CardContent>
                    </Card>
                 </Grid>
       <Grid item>
          <Card style={{ backgroundColor: "#D3D3D3" }} className={classes.height}>
             <CardContent>
               <Typography variant="subtitle1">
                 Strength<br/>
                 <b>500 mg</b>
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