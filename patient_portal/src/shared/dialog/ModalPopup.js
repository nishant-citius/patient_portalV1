import { makeStyles } from "@material-ui/core";
import { React } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "../../mui";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(13),
  },
  dialogTitle: {
    // paddingRight: "0px",
    // color: "red",
  },
}));

function ModalPopup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
      <DialogActions>
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={() => setOpenPopup(false)}
        >
          Close
        </Button>
      </DialogActions>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default ModalPopup;
