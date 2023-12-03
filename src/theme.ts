import { createTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: green[900],
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: green[900],
    },
  },
});
