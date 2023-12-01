import { Button, Grid, TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export default function ConfirmMobile() {
  const { t } = useTranslation();
  return (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <TextField
          fullWidth
          //  name="mobileNumber"
          variant="outlined"
          label={t("password")}

          //  {...register("mobileNumber", validate.mobileNumber)}
        />
      </Grid>
      <Grid item>
        <Button fullWidth variant="contained" color="primary">
          {t("check")}
        </Button>
      </Grid>
    </Grid>
  );
}
