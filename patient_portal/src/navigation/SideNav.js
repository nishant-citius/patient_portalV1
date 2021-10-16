import { makeStyles } from '@material-ui/core';
import {Container} from '../mui';
import {HomeIcon, AccessibilityIcon, ArchiveIcon, DashboardIcon, GroupIcon,
     ListAltIcon, PermContactCalendarIcon, ReceiptIcon, DetailsIcon, ContactPhoneIcon} from '../mui-icons';
     
import { Icon } from '@iconify/react';     
import { Link } from 'react-router-dom';
import * as actioncreators from '../redux/actions/userActionCreater';
import { connect } from 'react-redux';
import "./navigation.css";
import {
    LineStyle,
    PermIdentity,
    AttachMoney,
    WorkOutline,
  } from "@material-ui/icons";
  

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        color: "black",
        paddingTop: theme.spacing(10),
        backgroundColor: "#0C213A",
        position: "sticky",
        top: 0
    },
   
    item: {
        marginTop: "18px",
        display: "flex",
        alignItems: "center",
        textDecoration:"none",
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(4)
        }
    },
    icon: {
        color: '#1976D2',
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "25px"
        }
        
    },
    text: {
        fontSize: '14px',
        marginBottom: '0',
        color: '#a9baca',
        fontWeight: 400,
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    }
}));

const mapStateToProps = (rootReducer) => {
    return {
        isLoggedIn: rootReducer.login.isLoggedIn,
        role: rootReducer.login.role,
        authToken: rootReducer.login.authToken
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actioncreators.Logout()) 
    }
}

function SideNav(props)
{
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            {
// Admin Menu====================================================================================
                (props.role === "admin")
                ?
                (   
                    <div className="sideNav">
                        <div className={classes.item}>  
                        <Link to="/admin">
                            <DashboardIcon className={classes.icon}/>
                            <h5 className={classes.text}>Dashboard</h5>
                        </Link>
                        </div>
                        <div className={classes.item}>  
                        <Link to="/allusers">
                            <GroupIcon className={classes.icon}/>
                            <h5 className={classes.text}>All Users</h5>
                        </Link>
                        </div>
                        <div className={classes.item}> 
                        <Link to="/patientlist"> 
                            <ListAltIcon className={classes.icon}/>
                            <h5 className={classes.text}>Patient List</h5>
                        </Link>
                        </div>
                        <div className={classes.item}>  
                        <Link to="physicianlist">
                            <ListAltIcon className={classes.icon}/>
                            <h5 className={classes.text}>Physician List</h5>
                        </Link>
                        </div>
                        <div className={classes.item}> 
                        <Link to="/appointments"> 
                            <Icon icon="whh:appointment" className={classes.icon} />
                            <h5 className={classes.text}>Appointments</h5>
                        </Link>
                        </div>
                        <div className={classes.item}>  
                        <Link to="/billing">
                            <ReceiptIcon className={classes.icon}/>
                            <h5 className={classes.text}>Billing</h5>
                        </Link>
                        </div>
                        <div className={classes.item}>  
                        <Link to="/immunizationdetails">
                            <DetailsIcon className={classes.icon}/>
                            <h5 className={classes.text}>Immunization Details</h5>
                        </Link>
                        </div>
                    </div>
                )
                   :
// Patient Menu==================================================================================
                   (props.role === "patient")
                   ?
                   (   
                        <div className="sideNav">
                            <div className={classes.item}> 
                            <Link to="/patient"> 
                                <DashboardIcon className={classes.icon}/>
                                <h5 className={classes.text}>Patient Dashboard</h5>
                            </Link>
                            </div>
                            <div className={classes.item}>  
                            <Link to="">
                                <ContactPhoneIcon className={classes.icon}/>
                                <h5 className={classes.text}>My Profile</h5>
                            </Link>
                            </div>
                            <div className={classes.item}>  
                            <Link to="">
                                <Icon icon="whh:appointment" className={classes.icon} />
                                <h5 className={classes.text}>Schedule Appointment</h5>
                            </Link>
                            </div>
                            <div className={classes.item}> 
                            <Link to=""> 
                                <ListAltIcon className={classes.icon}/>
                                <h5 className={classes.text}>Appointment History</h5>
                            </Link>
                            </div>
                            <div className={classes.item}>  
                            <Link to="/demographics">
                                <Icon icon="fa:wpforms" className={classes.icon} />
                                <h5 className={classes.text}>Demographics</h5>
                            </Link>
                            </div>
                            <div className={classes.item}> 
                            <Link to="/medic-allergy"> 
                                <Icon icon="fa:wpforms" className={classes.icon} />
                                <h5 className={classes.text}>Medication and Allergies</h5>
                            </Link>
                            </div>
                            <div className={classes.item}>
                            <Link to="/immunization">  
                                <Icon icon="fa:wpforms" className={classes.icon} />
                                <h5 className={classes.text}>Immunization Details</h5>
                            </Link>
                            </div>
                            <div className={classes.item}>
                            <Link to="">  
                                <Icon icon="mdi:heart-pulse" className={classes.icon} />
                                <h5 className={classes.text}>Patient Vitals</h5>
                            </Link>
                            </div>
                            <div className={classes.item}>  
                            <Link to="">
                                <DetailsIcon className={classes.icon}/>
                                <h5 className={classes.text}>Orders</h5>
                            </Link>
                            </div>
                            <div className={classes.item}>  
                            <Link to="">
                                <Icon icon="mdi:cast-education" className={classes.icon} />
                                <h5 className={classes.text}>Patient Education</h5>
                            </Link>
                            </div>
                        </div>
                   )
                   :
 // physician Menu==============================================================================
                   (props.role === "physican")
                   ?
                   (   
                       <div className="sideNav">
                            <div className={classes.item}>  
                            <Link to="/physician">
                                <DashboardIcon className={classes.icon}/>
                                <h5 className={classes.text}>Physician Dashboard</h5>
                            </Link>
                            </div>
                            <div className={classes.item}>  
                            <Link to="">
                                <ListAltIcon className={classes.icon}/>
                                <h5 className={classes.text}>Patient List</h5>
                            </Link>
                            </div>
                       
                       </div>
                   )
                   :
                   (
                       null
                   )
            }   
        </Container>
    );
}

//export default SideNav;
export default connect(mapStateToProps, mapDispatchToProps)(SideNav);