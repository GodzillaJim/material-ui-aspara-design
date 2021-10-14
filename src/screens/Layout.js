import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex" },
  content: {
    marginTop: "60px",
    backgroundColor: "#e0e6f3",
    width: "100%"
  }
}));
const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavigationBar />
      <CssBaseline />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
