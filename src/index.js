import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import { StylesProvider, jssPreset } from "@material-ui/core";
import "./i18n/i18n";
import { create } from "jss";
import rtl from "jss-rtl";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StylesProvider jss={jss}>
    <App />
  </StylesProvider>
);
