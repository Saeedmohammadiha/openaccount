import {
  Grid,
  MenuItem,
  TextField,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Sheet from "react-modal-sheet";

import { useTranslation } from "react-i18next";
import { getAccountType } from "../endpoints";

export default function AccountTypeSelect({
  register,
  setValue,
}: AccountTypeSelectProps) {
  const [isOpen, setOpen] = useState(false);
  const [accountTypeValue, setAccountTypeValue] = useState("حساب قرض الحسنه");
  const theme = useTheme();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const { t } = useTranslation();

  const [accountList, setAccountList] = useState<AccountType[] | null>();

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
            name="accountType"
            variant="outlined"
            label={t("accountType")}
            {...register("accountType")}
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
                        setValue("accountType", item.id);
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
          defaultValue={1}
          select
          name="accountType"
          variant="outlined"
          label={t("accountType")}
          {...register("accountType")}
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
