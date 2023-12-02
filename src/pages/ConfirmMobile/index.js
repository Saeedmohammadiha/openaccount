import { Button, Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { validate } from "../../utils/rules";
import { useState } from "react";
import Countdown from "react-countdown";

export default function ConfirmMobile() {
  const [isCounting, setIsCounting] = useState(true);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // navigate("");
  };

  // Function to handle the countdown completion
  const handleCountdownComplete = () => {
    setIsCounting(false);
  };

  // Function to start the countdown
  const handleSendAgain = () => {
    setIsCounting(true);
  };

  const countdownRenderer = ({ minutes, seconds, completed }) => {
    return (
      <span>
        0{minutes}:{seconds}
      </span>
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            fullWidth
            name="password"
            variant="outlined"
            label={t("password")}
            error={!!errors?.password}
            helperText={errors?.password ? errors?.password?.message : ""}
            {...register("password", validate.confirmMobile)}
          />
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item style={{ width: "47%" }}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              {t("check")}
            </Button>
          </Grid>
          <Grid item style={{ width: "47%" }}>
            <Button
              fullWidth
              onClick={handleSendAgain}
              variant="contained"
              color="primary"
            >
              {isCounting ? (
                <Countdown
                  date={Date.now() + 120000}
                  renderer={countdownRenderer}
                  onComplete={handleCountdownComplete}
                />
              ) : (
                t("sendAgain")
              )}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
