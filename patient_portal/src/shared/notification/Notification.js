import { React } from "react";
import { SnackBar, makeStyles, Alert } from "../../mui";

const useStyles = makeStyles((theme) => ({
  root: {},
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
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </SnackBar>
  );
};

export default Notification;
