import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({

    input: {
      height: theme.spacing(7),
    },
    datePicker: {
      width: " 100%",
      height: " 60px",
      fontSize: " 1.2rem",
      padding: " 10px",
      outline: " none",
      border: " 1px solid gray",
      boxSizing: " border-box",
      borderRadius: " 5px",
      backgroundColor: theme.palette.background.default,
      color: theme.palette.type === "dark" && theme.palette.common.white,
    },
    datePickerError: {
      width: " 100%",
      height: " 60px",
      fontSize: " 1.2rem",
      padding: " 10px",
      outline: " none",
      border: " 1px solid red",
      boxSizing: " border-box",
      borderRadius: " 5px",
      backgroundColor: theme.palette.background.default,
      "&::placeholder": {
        color: "red",
      },
    },
  })
);

export { useStyles };
