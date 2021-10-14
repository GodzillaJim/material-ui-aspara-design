import React from "react";
import {
  AppBar,
  Toolbar,
  Card,
  Button,
  Box,
  Grid,
  makeStyles,
  useTheme,
  useMediaQuery,
  IconButton
} from "@material-ui/core";
import { BrowserView } from "react-device-detect";
import { WhatsApp, Telegram, Menu } from "@material-ui/icons";
import "bootstrap-css-only/css/bootstrap.css";
import Logo from "../resources/aspara.PNG";
import NavItem from "./NavItem";
import CustomDrawer from "./CustomDrawer";

export const menuItems = [
  { label: "Home", href: "/" },
  { label: "Client Login", href: "/client" },
  { label: "Talent Login", href: "/talent" },
  { label: "Open Jobs", href: "/jobs" },
  { label: "Resources", href: "/resources" }
];
const useStyles = makeStyles((theme) => ({
  navButtons: {
    backgroundColor: theme.palette.success.main,
    borderRadius: "20px",
    color: "white",
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#026B0E"
    },
    fontFamily: "Comic Sans Ms",
    textTransform: "capitalize"
  },
  telegramButton: {
    borderRadius: "20px",
    fontFamily: "Comic Sans Ms",
    textTransform: "capitalize"
  }
}));
const NavigationBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar color="light" elevation={3}>
      <Toolbar>
        <Grid
          spacing="3"
          justifyContent="space-between"
          container
          direction="row"
          alignContent="space-between"
        >
          <Grid item>
            <Box
              justifyContent="center"
              alignContent="center"
              alignSelf="center"
            >
              <Card elevation={0}>
                <img src={Logo} className="card-img " alt="aspara logo" />
              </Card>
            </Box>
          </Grid>
          {isSmall && (
            <Grid>
              <IconButton>
                <Menu color="primary" onClick={() => setOpen(!open)} />
              </IconButton>
              <CustomDrawer
                menuItems={menuItems}
                open={open}
                onClose={() => setOpen(!open)}
              >
                trees
              </CustomDrawer>
            </Grid>
          )}
          {!isSmall && (
            <BrowserView>
              <Grid spacing="2" container direction="row">
                <Grid item>
                  {menuItems.map((item, index) => (
                    <NavItem key={index} label={item.label} href={item.href} />
                  ))}
                </Grid>
                <Grid item>
                  <Button
                    className={classes.navButtons}
                    variant="contained"
                    startIcon={<WhatsApp className="text-bolder" />}
                  >
                    WhatsApp Keith
                  </Button>
                  <Button
                    className={classes.telegramButton}
                    color="primary"
                    variant="contained"
                    startIcon={<Telegram className="text-bolder" />}
                  >
                    Telegram Keith
                  </Button>
                </Grid>
              </Grid>
            </BrowserView>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
