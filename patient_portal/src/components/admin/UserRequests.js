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
    setUsers(props.inUsers);
  }, [props.inUsers]);

  const filterUsers = (_id) => {
    let filteredArray = users.filter((user) => {
      if (user.id !== _id) {
        return user;
      }
    });
    setUsers(filteredArray);
  };

  const approve = (user) => {
    let newObj = {
      ...user,
      password: user.rpassword,
      isActive: true,
    };
    props.updateUser(user.id, newObj);
    props.getInactiveUsersData();
  };

  const reject = (user) => {
    filterUsers(user.id);
  };

  return (
    <>
      <List>
        {users.length === 0 ? (
          <p>No user activation requests.</p>
        ) : (
          users.map((user) => {
            return (
              <ListItem alignItems="flex-start" key={user.id}>
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
                  className="btn btn-sm btn-success mrg_20"
                  onClick={() => approve(user)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-sm btn-danger mrg_20"
                  onClick={() => reject(user)}
                >
                  Reject
                </button>
              </ListItem>
            );
          })
        )}
      </List>
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    users: state.getallusers.users,
    inUsers: state.inactiveUsers.inactiveUsers,
    count: state.inactiveUsers.inactiveUserCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getalluserdata: () => dispatch(actionCreator.GetAllUserData()),
    updateUser: (userId, updatedData) =>
      dispatch(actionCreator.EditUser(userId, updatedData)),
    getInactiveUsersData: () => dispatch(actionCreator.GetInactiveUsers()),
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(UserRequests);
