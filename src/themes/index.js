import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2c8aff"
    },
    secondary: {
      main: "#f50057"
    },
    error: {
      main: "#f44336"
    },
    success: {
      main: "#4caf50"
    },
    background: {
      default: "#eef3fc"
    },
    light: {
      main: "white"
    }
  }
});

export default theme;
