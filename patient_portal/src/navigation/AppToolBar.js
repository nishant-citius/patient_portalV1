import "../components/common/common_style.css";
import {AppBar} from '../mui';
import {ToolBar} from '../mui';
import { SearchIcon } from '../mui-icons';
import {InputBase} from '../mui';

import {Badge} from '../mui';
import {MailIcon} from '../mui-icons';
import {NotificationsIcon} from '../mui-icons';
import {Avatar} from '../mui';
import { makeStyles, alpha } from '@material-ui/core';

import {Menu} from '../mui';
import {MenuItem} from '../mui';
import { useHistory } from "react-router";
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import * as actioncreators from '../redux/actions/userActionCreater';
import {
    NavBtn,
    NavBtnLink,
  } from "../components/Layout/NavbarElements";

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

const useStyles = makeStyles((theme) => ({
    desktop: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    mobile: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    mobile_btn: {
        textDecoration: "none",
        textAlign: "center",
        padding: '3px',
        outline: 'none',
        borderRadius: '5px',
        boxShadow: '0 1px 4px rgba(0, 0, 0, .6)',
        backgroundColor: '#2ecc71',
        color:' #ecf0f1',
        minWidth: "70px",
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open) ? "flex": "none"
        },
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      icons: {
        alignItems: "center",
        display: "flex"
      },
      searchbutton: {
          marginRight: theme.spacing(2),
          [theme.breakpoints.up("sm")]: {
              display: "none"
          }
      }
}));

function AppToolBar(props)
{
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const classes = useStyles({open});
    const history = useHistory();

    function HandleClick(event)
    {
        console.log("Avatar clicked");
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };
    function Logout()
    {
        props.logout();
        history.push("/");
    }
    
    return (
        <AppBar position="fixed">
            <ToolBar className={classes.toolbar}>
                <h3 className={classes.desktop}>Patient Management System</h3>
                <h3 className={classes.mobile}>PMS</h3>
                
                 
                {
                    (props.isLoggedIn == false)
                     ?
                         (  
                             <>
                        <NavBtn>
                            <NavBtnLink to="/registeruser">Register Here</NavBtnLink>
                            <NavBtnLink to="/login">Login</NavBtnLink>
                        </NavBtn>  
                        <Link className={classes.mobile_btn} to="/registeruser">SignUp</Link>
                        <Link className={classes.mobile_btn} to="/login">SignIn</Link> 
                        </>
                         )
                     :
                    (
                        <React.Fragment>
                        <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                         </div>
                         <div className={classes.icons}>
                         <SearchIcon className={classes.searchbutton} onClick={() => setOpen(true)}/>
                         <Badge badgeContent={10} color="secondary">
                             <NotificationsIcon/>
                         </Badge>
                         &nbsp;&nbsp;&nbsp;&nbsp;
                         <Badge badgeContent={6} color="secondary">
                             <MailIcon/>
                         </Badge>
                         &nbsp;&nbsp;&nbsp;&nbsp;
                         <Avatar onClick={HandleClick} alt="Karthikeyan" src="/images/user.png" />
                         <Menu className="mtop"
                             id="simple-menu"
                             anchorEl={anchorEl}
                             keepMounted
                             open={Boolean(anchorEl)}
                         >
                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>My account</MenuItem>
                              <MenuItem onClick={Logout}>Logout</MenuItem>
                         </Menu>
                     </div>
                     </React.Fragment>
                    )
                }
                
                
            </ToolBar>
        </AppBar>
    )
}

//export default AppToolBar;
export default connect(mapStateToProps, mapDispatchToProps)(AppToolBar);