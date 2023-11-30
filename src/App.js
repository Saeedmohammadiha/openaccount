import { Route, Routes } from "react-router";
import "./App.css";
import BasicInfo from "./pages/BasicInfo";
import { BrowserRouter } from "react-router-dom";
import { Button, CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import ChangeLanguage from "./i18n/ChangeButton";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";

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
          <Route path="/BasicInfo" element={<BasicInfo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
