import { Grid, TextField } from "@material-ui/core";
import { Form, useForm, Controller  } from "react-hook-form";

export default function BasicInfo() {


     
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <TextField
          name="username"
          //  inop={register}
            id="account-type"
            label="نوع حساب"
            variant="outlined"
            // error={"test"}
            // helperText="Incorrect entry."
          />
        </Grid>
        <Grid item>
          <TextField
         
            id="mobile-number"
            label="شماره موبایل"
            variant="outlined"
            // error={"test"}
            // helperText="Incorrect entry."
          />
        </Grid>
      </Grid>
    </form>
  );
}
