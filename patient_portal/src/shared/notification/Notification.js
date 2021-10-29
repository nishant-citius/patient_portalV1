import { React } from "react";
import { SnackBar, makeStyles, Alert } from "../../mui";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "660px",
    top: "61px",
  },
}));

const Notification = (props) => {
  const { notify, setNotify } = props;

  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "Click away") {
      return;
    }
    setNotify({ ...notify, isOpen: false });
  };

  /**create snackbar component here */
  return (
    <SnackBar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </SnackBar>
  );
};

export default Notification;
