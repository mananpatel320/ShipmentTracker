import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button, Grid, AppBar, Toolbar, Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minWidth: '275'
  },
  title: {
    fontSize: 20
  },
  post: {
    marginBottom: 12
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const data = [
    {
      consignmentName: 'ASD',
      consignmentNumber: '23456434',
      origin: 'Bangalore, Karnataka, India',
      destination: 'Kolkata, West Bengal, India',
      createdBy: 'ABC Retails',
      dateCreated: '15/06/20'
    },
    {
      consignmentName: 'ERT',
      consignmentNumber: '12463783',
      origin: 'Mumbai, Mahrashtra, India',
      destination: 'Kolkata, West Bengal, India',
      createdBy: 'KLJ Retails',
      dateCreated: '01/01/20'
    },
    {
      consignmentName: 'HKL',
      consignmentNumber: '34564728',
      origin: 'Bangalore, Karnataka, India',
      destination: 'Surat, Gujarat, India',
      createdBy: 'RTD Retails',
      dateCreated: '02/02/20'
    },
    {
      consignmentName: 'FKL',
      consignmentNumber: '12463783',
      origin: 'Jaipur, Rajasthan, India',
      destination: 'Kolkata, West Bengal, India',
      createdBy: 'TYJ Retails',
      dateCreated: '12/04/20'
    },
    {
      consignmentName: 'XTY',
      consignmentNumber: '34564728',
      origin: 'Bangalore, Karnataka, India',
      destination: 'Kolkata, West Bengal, India',
      createdBy: 'FGH Retails',
      dateCreated: '21/05/20'
    },
    {
      consignmentName: 'HYL',
      consignmentNumber: '34564728',
      origin: 'Bangalore, Karnataka, India',
      destination: 'Lucknow, Uttar Pradesh, India',
      createdBy: 'XYZ Retails',
      dateCreated: '12/07/19'
    }
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
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
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/createship">
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Create Shipment" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TrackChangesIcon />
            </ListItemIcon>
            <ListItemText primary="Track Shipment" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Handover Shipment" />
          </ListItem>
        </List>
        <Divider />
        <List>
          {['John Doe', 'Notifications', 'Send email', 'Logout'].map(
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
                  )}{' '}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Grid container direction="column">
          <Grid item>
            <div>
              <SearchIcon />
              <InputBase placeholder="Search Consignment" />
            </div>
            <hr />
          </Grid>
          <Grid item container>
            <Grid item xs={0} sm={1} />

            <Grid item xs={12} sm={10}>
              <Grid item container spacing={2}>
                {data.map((elem) => (
                  <Grid item xs={12} sm={6} key={data.indexOf(elem)}>
                    <Card>
                      <CardContent>
                        <Typography
                          style={{ display: 'inline-block' }}
                          className={classes.title}
                          component="h2"
                          variant="h5"
                          color="textPrimary"
                          gutterBottom
                        >
                          Consignment Name:
                        </Typography>
                        <Typography
                          style={{ display: 'inline-block' }}
                          variant="body1"
                          component="p"
                          color="textSecondary"
                        >
                          &nbsp;&nbsp;{`${elem.consignmentName}`}
                        </Typography>
                        <Typography>
                          <Typography
                            style={{ display: 'inline-block' }}
                            className={classes.title}
                            component="h2"
                            variant="h5"
                            color="textPrimary"
                            gutterBottom
                          >
                            Consignment Number:
                          </Typography>
                          <Typography
                            style={{ display: 'inline-block' }}
                            variant="body1"
                            component="p"
                            color="textSecondary"
                          >
                            &nbsp;&nbsp;{`${elem.consignmentNumber}`}
                          </Typography>
                        </Typography>
                        <Typography>
                          <Typography
                            style={{ display: 'inline-block' }}
                            className={classes.post}
                            color="textPrimary"
                          >
                            Origin:
                          </Typography>
                          <Typography
                            style={{ display: 'inline-block' }}
                            variant="body2"
                            component="p"
                            color="textSecondary"
                          >
                            &nbsp;&nbsp;{`${elem.origin}`}
                          </Typography>
                        </Typography>
                        <Typography>
                          <Typography
                            style={{ display: 'inline-block' }}
                            className={classes.post}
                            color="textPrimary"
                          >
                            Destination:
                          </Typography>
                          <Typography
                            style={{ display: 'inline-block' }}
                            variant="body2"
                            component="p"
                            color="textSecondary"
                          >
                            &nbsp;&nbsp;{`${elem.destination}`}
                          </Typography>
                        </Typography>
                        <Typography>
                          <Typography
                            style={{ display: 'inline-block' }}
                            className={classes.post}
                            color="textPrimary"
                          >
                            Created By:
                          </Typography>
                          <Typography
                            style={{ display: 'inline-block' }}
                            variant="body2"
                            component="p"
                            color="textSecondary"
                          >
                            &nbsp;&nbsp;{`${elem.createdBy}`}
                          </Typography>
                        </Typography>
                        <Typography>
                          <Typography
                            style={{ display: 'inline-block' }}
                            className={classes.post}
                            color="textPrimary"
                          >
                            Date Created:
                          </Typography>
                          <Typography
                            style={{ display: 'inline-block' }}
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
            <Grid item xs={0} sm={1} />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
