import { React } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  makeStyles,
} from "../../mui";
import { CloseIcon } from "../../mui-icons";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    width: "100%",
  },
  dialogTitle: {
    position: "absolute",
    left: "0px",
    color: "white",
  },
  dialogAction: {
    backgroundColor: "#3f51b5",
  },
}));

function EditDialog(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogActions className={classes.dialogAction}>
        <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => setOpenPopup(false)}
        >
          <CloseIcon />
        </Button>
      </DialogActions>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default EditDialog;
