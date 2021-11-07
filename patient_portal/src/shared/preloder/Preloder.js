import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    position: "absolute",
    left: "0",
    right: "0",
    margin: "auto",
    top: "50%",
    justifyContent: "center",
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }} className={classes.backdrop}>
      <CircularProgress />
    </Box>
  );
}
