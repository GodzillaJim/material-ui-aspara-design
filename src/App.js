import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./themes";
import Routes from "./routes";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
