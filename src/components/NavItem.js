import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: "650"
  },
  button: {
    borderBottom: "1px solid " + theme.palette.primary.default
  },
  link: {
    ":hover": {
      borderBottom: "0px solid"
    }
  },
  activeItem: {
    borderRadius: 0,
    borderBottom: `3px solid ${theme.palette.primary.main}`
  }
}));
const NavItem = ({ label, href }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <Button
      component={NavLink}
      to={href}
      className={
        location.pathname == href ? classes.activeItem : classes.button
      }
      variant="text"
    >
      <Typography className={classes.label} variant="body2">
        {label}
      </Typography>
    </Button>
  );
};
NavItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string
};
export default NavItem;
