import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  withStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { getObligation, saveObligation } from "../../endpoints";
import { green } from "@material-ui/core/colors";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function Obligation() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [obligation, setObligation] = useState("");
  const [approved, setApproved] = useState(false);
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    getObligation(token).then((res) => setObligation(res));
  }, []);

  const GreenCheckbox = withStyles({
    root: {
      color: green[900],
      "&$checked": {
        color: green[900],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const handleSubmit = async () => {
    await saveObligation(token);
    navigate("");
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Paper style={{ height: "70vh", overflow: "auto" }} variant="outlined">
          {obligation}
        </Paper>
      </Grid>
      <Grid item>
        <FormControlLabel
          style={{ marginRight: 0 }}
          control={
            <GreenCheckbox
              checked={approved}
              onChange={(e) => setApproved(e.target.checked)}
              name="approved"
            />
          }
          label={t("approveObligation")}
        />
      </Grid>
      <Grid item>
        <Button
          disabled={!approved}
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          {t("check")}
        </Button>
      </Grid>
    </Grid>
  );
}
