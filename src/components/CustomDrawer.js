import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles
} from "@material-ui/core";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: "650"
  },
  root: {
    marginTop: "30px"
  },
  item: {
    paddingRight: theme.spacing(4)
  },
  activeItem: {
    borderRight: `4px solid ${theme.palette.primary.main}`,
    paddingRight: theme.spacing(4)
  }
}));
const CustomDrawer = ({ open, onClose, menuItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <Drawer open={open} onClose={onClose}>
      <div className={classes.root}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              className={
                location.pathname === item.href
                  ? classes.activeItem
                  : classes.item
              }
              button
              component={NavLink}
              to={item.href}
              key={index}
            >
              <ListItemText
                to={item.href}
                primary={
                  <Typography variant="caption">{item.label}</Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

CustomDrawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  menuItems: PropTypes.array
};
export default CustomDrawer;
