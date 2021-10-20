import { React } from "react";
import { SnackBar, makeStyles, Alert } from "../../mui";

const useStyles = makeStyles((theme) => ({
  root: {
    // top: theme.spacing(9),
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
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </SnackBar>
  );
};

export default Notification;
