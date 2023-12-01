import { Button, Grid, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { validate } from "../../utils/rules";
import AccountTypeSelect from "../../components/AccountTypeSelect";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function BasicInfo() {
  const navigate = useNavigate()
  const classes = useStyles();
  const {t} = useTranslation()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("err", errors);
    navigate("/confirmMobile")
  };

  return (
    <Grid className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={5}>
          <AccountTypeSelect register={register} setValue={setValue} />
          <Grid item>
            <TextField
              fullWidth
              className={classes.input}
              name="mobileNumber"
              variant="outlined"
              label={t('mobileNumber')}
              error={!!errors?.mobileNumber}
              helperText={
                errors?.mobileNumber ? errors?.mobileNumber?.message : ""
              }
              {...register("mobileNumber", validate.mobileNumber)}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              className={classes.input}
              name="nationalId"
              variant="outlined"
              label={t('nationalId')}
              error={!!errors?.nationalId}
              helperText={errors?.nationalId ? errors?.nationalId?.message : ""}
              {...register("nationalId", validate.nationalId)}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              className={classes.input}
              name="cartSerial"
              variant="outlined"
              label={t('cartSerial')}
              error={!!errors?.cartSerial}
              helperText={errors?.cartSerial ? errors?.cartSerial?.message : ""}
              {...register("cartSerial", validate.cartSerial)}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              name="birthdate"
              rules={{ required: "Birthdate is required" }}
              render={({ field, fieldState }) => {
                return (
                  <>
                    <DatePicker
                      inputClass={
                        fieldState.error
                          ? classes.datePickerError
                          : classes.datePicker
                      }
                      round="x4"
                      onChange={(d) => {
                        field.onChange(d.value);
                      }}
                      inputAttributes={{
                        placeholder: t("birthdate"),
                      }}
                      position="center"
                    />
                    {fieldState?.error && (
                      <p class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error">
                        {t('dateErrorTxt')}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </Grid>
          <Grid item>
            <Button fullWidth variant="contained" color="primary" type="submit">
              {t('check')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
