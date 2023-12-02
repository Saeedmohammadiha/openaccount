import {
  Grid,
  MenuItem,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Sheet from "react-modal-sheet";
//import { accountTypeList } from "../utils/accountTypeList";
import { useTranslation } from "react-i18next";
import { getAccountType } from "../endpoints";

export default function AccountTypeSelect({ register, setValue }) {
  const [isOpen, setOpen] = useState(false);
  const [accountTypeValue, setAccountTypeValue] = useState("حساب قرض الحسنه");
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const theme = useTheme();
  const { t } = useTranslation();

  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    getAccountType().then((res) => setAccountList(res.data.data));
  }, []);

  return (
    <Grid item>
      {matches ? (
        <>
          <TextField
            onClick={() => setOpen(true)}
            style={{ height: theme.spacing(7) }}
            fullWidth
            value={accountTypeValue}
            name="accoutType"
            variant="outlined"
            label={t("accoutType")}
            {...register("accoutType")}
          />
          <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container
              style={{
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Sheet.Header />
              <Sheet.Content>
                {accountList?.map((item) => {
                  return (
                    <MenuItem
                      onClick={(e) => {
                        setAccountTypeValue(item.title);
                        setValue("accoutType  ", item.title);
                        setOpen(false);
                      }}
                      key={item.id}
                      value={item.id}
                    >
                      {item.title}
                    </MenuItem>
                  );
                })}
              </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
          </Sheet>{" "}
        </>
      ) : (
        <TextField
          style={{ height: theme.spacing(7) }}
          fullWidth
          defaultValue={0}
          select
          name="accoutType"
          variant="outlined"
          label={t("accoutType")}
          {...register("accoutType")}
        >
          {accountList?.map((item) => {
            return (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            );
          })}
        </TextField>
      )}
    </Grid>
  );
}
