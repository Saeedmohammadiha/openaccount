import {
  Button,
  Checkbox,
  CheckboxProps,
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
  const [token, setToken] = useState<ObligationBody | string>();

  useEffect(() => {
    const storedtoken = localStorage.getItem("token");
    const parsedToken = storedtoken ? JSON.parse(storedtoken) : "";
    setToken(parsedToken);
    if (typeof token === "object") {
      getObligation(token).then((res:{data: string}) => setObligation(res.data));
    }
  }, []);

  const GreenCheckbox = withStyles({
    root: {
      color: green[900],
      "&$checked": {
        color: green[900],
      },
    },
    checked: {},
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

  const handleSubmit = async () => {
    await saveObligation(token as ObligationBody);
    navigate("");
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Paper
          style={{ height: "70vh", overflow: "auto", borderColor: green[900] }}
          variant="outlined"
        >
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
