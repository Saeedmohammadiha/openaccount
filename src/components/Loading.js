import { Backdrop, CircularProgress } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export default function Loading() {
  return (
    <Backdrop style={{ zIndex: 5, color: green[900] }} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
