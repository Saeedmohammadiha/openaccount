import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";

const accountTypeList = [
  { value: 0, title: "حساب قرض الحسنه" },
  { value: 1, title: "سپرده کوتاه مدت" },
  { value: 2, title: "سپرده کوتاه مدت طرح احسان - نیم درصد" },
  { value: 3, title: "سپرده کوتاه مدت طرح احسان - صفر درصد" },
];
export default function BasicInfo() {
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
    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "80px" }}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <TextField
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
                round="x4"
                onChange={(d) => {
                  console.log(field);
                  field.onChange(d.value);
                }}
                inputAttributes={{
                  placeholder: "تاریخ تولد",
                }}
                position="center"
              />
            )}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" type="submit">بررسی</Button>
    </form>
  );
}
