import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { validate } from "../../utils/rules";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { VerificationOTP, createAuthRequest } from "../../endpoints";
import { useNavigate } from "react-router";

export default function ConfirmMobile() {
  const [isCounting, setIsCounting] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const onSubmit = async (data) => {
    const { password } = data;

    const body = {
      nationalCode: userData?.nationalCode,
      mobile: userData?.mobile,
      verifyCode: password,
    };

    try {
      const res = await VerificationOTP(body);
      console.log(res);
      navigate("");
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle the countdown completion
  const handleCountdownComplete = () => {
    setIsCounting(false);
  };

  const handleSendAgain = async () => {
    await createAuthRequest(userData);
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
          <Typography>
            کد فعالسازی به شماره <span>{userData?.mobile}</span> ارسال شده است،
            لطفا پس از دریافت، آن را در کادر پایین وارد نمایید.
          </Typography>
        </Grid>
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
