import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import "./admin.css";

import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "../../mui";

const UserRequests = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  function fetchAllUsers() {
    props.getalluserdata();
    setUsers(inactiveUsersList());
  }

  const inactiveUsersList = () => {
    let inactiveUsers = props.users.filter((user) => {
      if (!user.isActive) return user;
    });
    return inactiveUsers;
  };

  const filterUsers = (_id) => {
    let filteredArray = users.filter((user) => {
      if (user.id !== _id) {
        return user;
      }
    });
    setUsers(filteredArray);
  };

  const approve = (user) => {
    filterUsers(user.id);
    user.isActive = true;
    props.updateUser(user.id, user);
  };

  const reject = (user) => {
    filterUsers(user.id);
  };

  return (
    <>
      <List>
        {users.map((user) => {
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={`${user.fName} ${user.lName}`} src="" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <span className="text-success fw-bold">
                      {user.fName} {user.lName}
                    </span>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        <span className="text-primary fw-bold">Email : </span>
                        {user.email}
                      </Typography>
                    </>
                  }
                />
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => approve(user)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => reject(user)}
                >
                  Reject
                </button>
              </ListItem>
            </>
          );
        })}
      </List>
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    users: state.getallusers.users,
    responseText: state.updateusers.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getalluserdata: () => dispatch(actionCreator.GetAllUserData()),
    updateUser: (userId, updatedData) =>
      dispatch(actionCreator.EditUser(userId, updatedData)),
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(UserRequests);
