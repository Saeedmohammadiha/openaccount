import {
  Button,
  Grid,
  MenuItem,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { theme } from "../theme";
import ChangeLanguage from "../i18n/ChangeButton";

const accountTypeList = [
  { value: 0, title: "حساب قرض الحسنه" },
  { value: 1, title: "سپرده کوتاه مدت" },
  { value: 2, title: "سپرده کوتاه مدت طرح احسان - نیم درصد" },
  { value: 3, title: "سپرده کوتاه مدت طرح احسان - صفر درصد" },
];

const useStyles = makeStyles({
  container: {
    margin: theme.spacing(5),
  },
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
  },
});

export default function BasicInfo() {
  const classes = useStyles();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("err", errors);
  };

  return (
    <Grid className={classes.container}>
      <ChangeLanguage />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={5}>
          <Grid item>
            <TextField
              className={classes.input}
              fullWidth
              defaultValue={0}
              select
              name="accoutType"
              variant="outlined"
              label="نوع حساب"
              error={!!errors?.accoutType}
              helperText={errors?.accoutType ? errors?.accoutType?.message : ""}
              {...register("accoutType", {
                required: "لطفا نوع حساب را انتخاب کنید.",
              })}
            >
              {accountTypeList?.map((item) => {
                return (
                  <MenuItem key={item.value} value={item.value}>
                    {item.title}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              className={classes.input}
              name="mobileNumber"
              variant="outlined"
              label="تلفن همراه"
              error={!!errors?.mobileNumber}
              helperText={
                errors?.mobileNumber ? errors?.mobileNumber?.message : ""
              }
              {...register("mobileNumber", {
                required: "لطفا تلفن همراه را وارد کنید",
                pattern: {
                  value: /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
                  message: "تلفن  همراه نامعتبر است.",
                },
              })}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              className={classes.input}
              name="nationalId"
              variant="outlined"
              label="کد ملی"
              error={!!errors?.nationalId}
              helperText={errors?.nationalId ? errors?.nationalId?.message : ""}
              {...register("nationalId", {
                required: "لطفا کد ملی را وارد کنید",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "کد ملی باید 10 رقم باشد.",
                },
              })}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              className={classes.input}
              name="cartSerial"
              variant="outlined"
              label="سریال کارت ملی"
              error={!!errors?.cartSerial}
              helperText={errors?.cartSerial ? errors?.cartSerial?.message : ""}
              {...register("cartSerial", {
                required: "لطفا سریال کارت ملی را وارد کنید.",
              })}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              name="birthdate"
              render={({ field }) => (
                <DatePicker
                  inputClass={classes.datePicker}
                  round="x4"
                  onChange={(d) => {
                    field.onChange(d.value);
                  }}
                  inputAttributes={{
                    placeholder: "تاریخ تولد",
                  }}
                  position="center"
                  show
                />
              )}
            />
          </Grid>
          <Grid item>
            <Button fullWidth variant="contained" color="primary" type="submit">
              بررسی
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
