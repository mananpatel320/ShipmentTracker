import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
// import InputBase from "@material-ui/core/InputBase";
// import SearchIcon from "@material-ui/icons/Search";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ReceiptIcon from "@material-ui/icons/Receipt";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";

// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import Link from "@material-ui/core/Link";

import AddressSource from "./AddressSource";
import ProdDet from "./ProdDet";
// import Review from "./Review";
import AddressDest from "./AddressDest";
import IoT from "./IoT";
import Legs from "./Legs";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     display: "flex",
  //     minWidth: "275",
  //   },
  title: {
    fontSize: 20,
  },
  post: {
    marginBottom: 12,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  //   appBar: {
  //     position: "relative",
  //   },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/"></Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = [
  "Enter Source",
  "Product Details",
  "IoT Devices",
  "Enter Destination",
  "Legs of Trip",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressDest />;
    case 1:
      return <ProdDet />;
    case 2:
      return <IoT />;
    case 3:
      return <AddressSource />;
    case 4:
      return <Legs />;
    default:
      throw new Error("Unknown step");
  }
}

export default function CreateShip() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              CREATE SHIPMENT
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>

      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <h3>Dashboard</h3>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            "Dashboard",
            "Create Shipment",
            "Track Shipment",
            "Handover Shipment",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? (
                  <DashboardIcon />
                ) : index === 1 ? (
                  <AddCircleIcon />
                ) : index === 2 ? (
                  <TrackChangesIcon />
                ) : (
                  <ReceiptIcon />
                )}{" "}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["John Doe", "Notifications", "Send email", "Logout"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? (
                    <AccountCircleIcon />
                  ) : index === 1 ? (
                    <MailIcon />
                  ) : index === 2 ? (
                    <MailIcon />
                  ) : (
                    <ExitToAppIcon />
                  )}{" "}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Grid container direction="column">
          {/* <Grid item>
            <div>
              <SearchIcon />
              <InputBase placeholder="Search Consignment" />
            </div>
            <hr />
          </Grid> */}
          <Grid item xs={0} sm={1} />
          <Grid item container>
            {/* <Grid item xs={12} sm={10}>
              <Grid item container spacing={2}>
                {data.map((elem) => (
                  <Grid item xs={12} sm={6} key={data.indexOf(elem)}>
                    <Card>
                      <CardContent>
                        <Typography
                          style={{ display: "inline-block" }}
                          className={classes.title}
                          component="h2"
                          variant="h5"
                          color="textPrimary"
                          gutterBottom
                        >
                          Consignment Name:
                        </Typography>
                        <Typography
                          style={{ display: "inline-block" }}
                          variant="body1"
                          component="p"
                          color="textSecondary"
                        >
                          &nbsp;&nbsp;{`${elem.consignmentName}`}
                        </Typography>
                        <Typography>
                          <Typography
                            style={{ display: "inline-block" }}
                            className={classes.title}
                            component="h2"
                            variant="h5"
                            color="textPrimary"
                            gutterBottom
                          >
                            Consignment Number:
                          </Typography>
                          <Typography
                            style={{ display: "inline-block" }}
                            variant="body1"
                            component="p"
                            color="textSecondary"
                          >
                            &nbsp;&nbsp;{`${elem.consignmentNumber}`}
                          </Typography>
                        </Typography>
                        <Typography>
                          <Typography
                            style={{ display: "inline-block" }}
                            className={classes.post}
                            color="textPrimary"
                          >
                            Origin:
                          </Typography>
                          <Typography
                            style={{ display: "inline-block" }}
                            variant="body2"
                            component="p"
                            color="textSecondary"
                          >
                            &nbsp;&nbsp;{`${elem.origin}`}
                          </Typography>
                        </Typography>
                        <Typography>
                          <Typography
                            style={{ display: "inline-block" }}
                            className={classes.post}
                            color="textPrimary"
                          >
                            Destination:
                          </Typography>
                          <Typography
                            style={{ display: "inline-block" }}
                            variant="body2"
                            component="p"
                            color="textSecondary"
                          >
                            &nbsp;&nbsp;{`${elem.destination}`}
                          </Typography>
                        </Typography>
                        <Typography>
                          <Typography
                            style={{ display: "inline-block" }}
                            className={classes.post}
                            color="textPrimary"
                          >
                            Created By:
                          </Typography>
                          <Typography
                            style={{ display: "inline-block" }}
                            variant="body2"
                            component="p"
                            color="textSecondary"
                          >
                            &nbsp;&nbsp;{`${elem.createdBy}`}
                          </Typography>
                        </Typography>
                        <Typography>
                          <Typography
                            style={{ display: "inline-block" }}
                            className={classes.post}
                            color="textPrimary"
                          >
                            Date Created:
                          </Typography>
                          <Typography
                            style={{ display: "inline-block" }}
                            variant="body2"
                            component="p"
                            color="textSecondary"
                          >
                            &nbsp;&nbsp;{`${elem.dateCreated}`}
                          </Typography>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          Details
                        </Button>
                        <Button size="small" color="primary">
                          Tracker
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={0} sm={1} /> */}
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
