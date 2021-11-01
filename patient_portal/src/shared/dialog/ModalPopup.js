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
    // padding: theme.spacing(2),
    position: "absolute",
    // top: theme.spacing(2),
    // right: theme.spacing(13),
  },
  dialogTitle: {
    position: "absolute",
    left: "0px",
    color: "green",
  },
}));

function ModalPopup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogActions>
        <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={() => setOpenPopup(false)}
        >
          <CloseIcon />
        </Button>
      </DialogActions>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default ModalPopup;
