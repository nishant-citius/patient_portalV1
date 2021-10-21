import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { useHistory } from "react-router";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'

import InputAdornment from "@material-ui/core/InputAdornment";
import Box from '@material-ui/core/Box';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import  {KeyboardDatePicker,
// DatePicker} from "@material-ui/Picker";
//import BloodtypeIcon from '@material-ui/icons/Bloodtype';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import EmailIcon from '@material-ui/icons/Email';

//import MailOutlineIcon from '@mui/icons-material/MailOutline';

const oldRegisterUser = (props) => {
  let tempUser = {
    fName: "",
    lName: "",
    dob: "",
    username: "",
    email: "",
    mobile: "",
    role: "patient",
    password: "",
    rpassword: "",
    blood_group: "",
    createdDate: Date(),
    isActive: true,
  };

  const [user, setUser] = useState(tempUser);
  let history = useHistory();

  const handleUserChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitUserData = (e) => {
    e.preventDefault();
    let newUserData = { ...user };

    if (user.fName.length < 1) {
      alert("plse enter valid First name");
    }
    if (user.lName.length < 1) {
      alert("plse enter valid last name");
    }

    if (user.password !== user.rpassword) {
      alert("plse enter the same password");
    } else {
      // onSubmit(newUserData);
      props.register(newUserData);
    }
  };

  useEffect(() => {
    if (props.statusCode === 200) {
      history.push("/login");
    }
  });

  
  const paperStyle={padding :20,height:'175vh',width:400, margin:"60px auto", marginTop: "110px"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
  return (
   <>
    
      <Paper elevation={10} style={paperStyle}>
       <Grid align="center">
        <Avatar style={avatarStyle}><LockOpenIcon/></Avatar>
          <br/>
            <h4>Registration</h4>
            <br/>
            </Grid>
            
             <Grid item xs={12} >
             <TextField
            required
            id="filled-required"
            label="First Name"
            placeholder="enter first name"  fullWidth required
            name="fName"
            id="fName"
            value={user.fName}
            onChange={handleUserChange}
            variant="filled"
            />
           </Grid>

             <br/>
            <div>
            <TextField
            required
            id="filled-required"
            label="Last Name"
            placeholder="enter last name" fullWidth required
            name="lName"
            id="lName"
            value={user.lName}
            onChange={handleUserChange}
            variant="filled"
            />
            </div>

            <br/>
            <div>
            <TextField
            required
            id="filled-required"
            // label="D.O.B"
            type="date"
            placeholder="enter dob" fullWidth required
            name="dob"
            id="dob"
            value={user.dob}
            onChange={handleUserChange}
            variant="filled"
            />
            </div>
            <br/>
            <div>
            <TextField
            required
            type="text"
            id="filled-required"
            label="UserName"
            placeholder="enter username" fullWidth required
            name="username"
            id="username"
            value={user.username}
            onChange={handleUserChange}
            variant="filled"
            />
            </div>
             
            
             <br/>
            <div>
            <TextField
            required
            id="filled-required"
            label="Role" fullWidth require
            // placeholder="Patient" fullWidth required
            name="role"
            id="role"
            // value={user.role}
            // onChange={handleUserChange}
            defaultValue="Patient"
            variant="filled"
            disabled
            />
            </div>
           
             {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
             <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
          <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value=""
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ad</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
            </FormControl> */}
          
            <br/>
            {/* <div>
            <TextField
            required
            type="text"
            id="filled-required"
            label="Email"
            placeholder="enter email" fullWidth required
            name="email"
            id="email"
            value={user.email}
            onChange={handleUserChange}
            variant="filled"
            />
            </div>
            <br/> */}

            <div>
            <TextField
            required
            type="number"
            id="filled-required"
            label="Mobile"
            placeholder="enter mobile no" fullWidth required
            name="mobile"
            id="mobile"
            value={user.mobile}
            onChange={handleUserChange}
            variant="filled"
            />
            </div>
            <br/>
             <div>
             <TextField 
            margin="normal"
            onChange={handleUserChange}
            placeholder='Enter Blood Group' fullWidth required
            name="blood_group"
            id="blood_group"
            value={user.blood_group}
            onChange={handleUserChange}
            id="input-with-icon-textfield"
            label="Blood Group"
            variant="filled"
           />
          </div>
          <br/>
            <div>
            <TextField
            required
            type="text"
            id="filled-required"
            label="Email"
            placeholder="enter email" fullWidth required
            name="email"
            id="email"
            value={user.email}
            onChange={handleUserChange}
            variant="filled"
            />
            </div>
            <br/>
            <div>
            <TextField
            required
            type="password"
            id="filled-required"
            label="Password"
            placeholder="enter password" fullWidth required
            name="password"
            id="password"
            value={user.password}
            onChange={handleUserChange}
            variant="filled"
            />
            </div>
            
            <br/>
            <div>
            <TextField
            required
            type="password"
            id="filled-required"
            label="Re password"
            placeholder="enter rpassword" fullWidth required
            name="rpassword"
            id="rpassword"
            value={user.rpassword}
            onChange={handleUserChange}
            variant="filled"
            />
            </div>
            <div>
            <button onClick={submitUserData} type="submit" className="btn btn-primary mt-2 center">
              Submit
            </button> 
            </div>
            <h4 className="text-danger">{props.globalMessage}</h4>
         </Paper>     
        
           
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    globalMessage: state.register.globalmessage,
    statusCode: state.register.statusCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newuser) => dispatch(actionCreator.Register(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(oldRegisterUser);
