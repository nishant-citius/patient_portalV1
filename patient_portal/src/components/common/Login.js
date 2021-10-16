import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import "../common/common_style.css";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = (props) => {
  const tempUser = {
    email: "",
    password: "",
  };

  let history = useHistory();
  const [user, setUser] = useState(tempUser);

  const handleUserChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitUserData = (e) => {
    e.preventDefault();
    let newUserData = { ...user };
    props.login(newUserData);
  };

  useEffect(() => {
    if (props.isLoggedIn === true) {
      console.log(props.currentUser);
      if (props.role === "admin") {
        history.push("/admin");
      } else if (props.role === "patient") {
        history.push("/demographics");
      } else {
        history.push("/physician");
      }
    }
  });

  const paperStyle={padding :20,height:'70vh',width:280, margin:"60px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <br/>
            <h4>Sign In</h4>
              </Grid>
                <TextField label='Username' margin="normal"
                name="email"
                onChange={handleUserChange}
                 placeholder='Enter username' fullWidth required/>
                  <br/>
                <TextField label='Password' 
                placeholder='Enter password' 
                type='password' 
                name="password"
                onChange={handleUserChange}  fullWidth required/>
                  <br/>
                <FormControlLabel
                control={
                <Checkbox
                name="checkedB"
                color="primary"
                />
                }
                label="Remember me"
                />

                <Button onClick ={submitUserData} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                 <br/>
                 
                  {/* <Typography >
                     <Link to="#" >
                       Forgot password ?
                     </Link>
                  </Typography> */}
                  
                  <Typography > Do you have an account ?
                      <Link to ="./registeruser" >
                          Sign Up 
                      </Link>
                  </Typography>
              </Paper>
          </Grid>
      );
  
};

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    role: state.login.role,
    globalmessage: state.login.globalmessage,
    authToken: state.login.authToken,
    currentUser: state.login.loggedUserInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(actionCreator.Login(user)),
  };
};

let hof = connect(mapStatetoProps, mapDispatchToProps);
export default hof(Login);
