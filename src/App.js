import { Route, Routes } from "react-router";
import { Suspense, lazy, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Button,
  CssBaseline,
  Grid,
  ThemeProvider,
  useTheme,
} from "@material-ui/core";

import ChangeLanguage from "./i18n/ChangeButton";
import { lightTheme, darkTheme } from "./theme";
import "./App.css";
import Loading from "./components/Loading";

const BasicInfo = lazy(() => import("./pages/BasicInfo"));
const ConfirmMobile = lazy(() => import("./pages/ConfirmMobile"));

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const theme = useTheme();

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Grid container>
        <ChangeLanguage />
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          onClick={() => {
            if (themeMode === "dark") {
              setThemeMode("light");
            } else {
              setThemeMode("dark");
            }
          }}
        >
          <span>ct</span>
        </Button>
      </Grid>
      <Suspense fallback={<Loading />}>
        <Grid style={{ margin: theme.spacing(5) }}>
          <BrowserRouter>
            <Routes>
              <Route path="/BasicInfo" element={<BasicInfo />} />
              <Route path="/confirmMobile" element={<ConfirmMobile />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
