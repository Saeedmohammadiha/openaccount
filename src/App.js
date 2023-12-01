import { Route, Routes } from "react-router";
import { Suspense, lazy, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Button,
  CircularProgress,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@material-ui/core";

import ChangeLanguage from "./i18n/ChangeButton";
import { lightTheme, darkTheme } from "./theme";
import "./App.css";
import Loading from "./components/Loading";

const BasicInfo = lazy(() => import("./pages/BasicInfo"));

function App() {
  const [themeMode, setThemeMode] = useState("light");

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
      <BrowserRouter>
        <Routes>
          <Route
            path="/BasicInfo"
            element={
              <Suspense fallback={<Loading />}>
                <BasicInfo />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
