import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Details from './ConsignmentDetails';
import IoTDetails from './IoTDetails';
import ConsTable from './ConsignmentTable';
import Chart from './Chart';

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
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

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={0} md={0} lg={1}></Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper className={fixedHeightPaper}>
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

            <Grid item xs={0} md={0} lg={2}>
              <Box
                component="span"
                display={{ xs: 'none', lg: 'block', xl: 'none' }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ArrowRightAltIcon style={{ fontSize: 150 }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper className={fixedHeightPaper}>
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
            <Grid container spacing={3}>
              <Grid item xs={0} md={0} lg={1}></Grid>

              <Grid item xs={12} md={5} lg={5}>
                <Paper className={classes.paper}>
                  <Details />
                </Paper>
              </Grid>
              <Grid item md={5}>
                <Paper className={classes.paper}>
                  <IoTDetails />
                </Paper>
              </Grid>
              <Grid item md={6}>
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
              <Grid item xs={12} md={6}>
                <Typography
                  component="h2"
                  variant="h4"
                  color="primary"
                  gutterBottom
                >
                  Heartbeat (BPM)
                </Typography>
                <Chart />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                variant="h4"
                color="primary"
                gutterBottom
              >
                Temperature (°C)
              </Typography>
              <Chart />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                variant="h4"
                color="primary"
                gutterBottom
              >
                Pressure (Pa)
              </Typography>
              <Chart />
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
