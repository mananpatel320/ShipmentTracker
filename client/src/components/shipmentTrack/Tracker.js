import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';

import Details from './ConsignmentDetails';
import IoTDetails from './IoTDetails';
import ConsTable from './ConsignmentTable';
import Chart from './Chart';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Map from './map';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://www.happiestminds.com/mindful-it-company/"
      >
        Happiest Minds
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const drawerWidth = 240;

const theme = createMuiTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  button: {
    margin: theme.spacing(1)
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },

  title: {
    flexGrow: 1
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  }
}));

export default function DetailsandTrack() {
  const classes = useStyles();

  clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<KeyboardBackspaceIcon />}
          >
            Back to Dashboard
          </Button>
          <Grid
            container
            spacing={3}
            sdirection="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <Details />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h5"
                  color="primary"
                  noWrap
                  className={classes.title}
                >
                  <IconButton color="secondary">
                    <LocationOnIcon />
                  </IconButton>
                  Origin
                </Typography>
                <ThemeProvider theme={theme}>
                  <Typography
                    component="h6"
                    variant="h6"
                    className={classes.title}
                  >
                    Happiest Minds Technologies Limited SMILES 1,3rd and 4th
                    Floor, SJR Equinox, Sy.No.47/8, Doddathogur Village, Begur
                    Hobli, Electronics City Phase 1, Hosur Road, Bengaluru – 560
                    100
                  </Typography>
                </ThemeProvider>
                <Typography>
                  <Typography
                    color="inherit"
                    component="p"
                    style={{ display: 'inline-block' }}
                  >
                    Date of Dispatch:
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    style={{ display: 'inline-block' }}
                  >
                    &nbsp;&nbsp;10 February 2020
                  </Typography>
                </Typography>
              </Paper>
            </Grid>

            {/* <Grid item xs={0} md={0} lg={2}>
              <Box
                component="span"
                display={{ xs: "none", lg: "block", xl: "none" }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ArrowRightAltIcon style={{ fontSize: 150 }} />
              </Box>
            </Grid> */}
          </Grid>
          <Grid
            container
            spacing={3}
            sdirection="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <IoTDetails />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h5"
                  color="primary"
                  noWrap
                  className={classes.title}
                >
                  <IconButton color="secondary">
                    <LocationOnIcon />
                  </IconButton>
                  Destination
                </Typography>
                <Typography
                  component="h6"
                  variant="h6"
                  className={classes.title}
                >
                  Happiest Minds Technologies Limited Office No. 1616, 16th
                  Floor Building No. A-1, Sector No.1, Rupa Solitaire MBP
                  (Millennium Business Park), TTC Industrial Area Navi Mumbai -
                  400710
                </Typography>
                <Typography>
                  <Typography
                    color="inherit"
                    component="p"
                    style={{ display: 'inline-block' }}
                  >
                    Date of Arrival:
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    style={{ display: 'inline-block' }}
                  >
                    &nbsp;&nbsp;10 February 2020
                  </Typography>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            sdirection="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid container spacing={3} item xs={12} md={6}>
              <Grid item xs={12} md={12}>
                <Chart />
              </Grid>

              <Grid item xs={12} md={12}>
                <Chart1 />
              </Grid>
              <Grid item xs={12} md={12}>
                <Chart2 />
              </Grid>
            </Grid>

            <Grid container spacing={3} item xs={12} md={6}>
              <Grid item xs={12} md={12}>
                <Paper elevation={15}>
                  <Map />
                </Paper>
              </Grid>
              <Grid item md={12}>
                <Paper className={classes.paper}>
                  <Typography
                    component="h2"
                    variant="h4"
                    color="primary"
                    gutterBottom
                  >
                    Legs of the Journey
                  </Typography>
                  <ConsTable />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          {/* </Grid>
          </Grid> */}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
