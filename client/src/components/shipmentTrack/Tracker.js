import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Details from './ConsignmentDetails';
import IoTDetails from './IoTDetails';
import ConsTable from './ConsignmentTable';
import Chart from './Chart';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { getShipment } from '../../actions/shipment';
import Spinner from '../layout/Spinner';
import Moment from 'react-moment';
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
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },

  title: {
    flexGrow: 1
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

const Tracker = ({ getShipment, shipment: { shipment, loading }, match }) => {
  const classes = useStyles();
  useEffect(() => {
    getShipment(match.params.id);
  }, [getShipment, match.params.id]);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return loading || shipment === null ? (
    <Spinner />
  ) : (
    <div className={classes.root}>
      <CssBaseline />

      <Grid container spacing={3}>
        {/* <Grid item xs={0} md={0} lg={1}></Grid> */}
        <Grid item xs={12} md={6} lg={5}>
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
            <ThemeProvider theme={theme}>
              <Typography component="h6" variant="h6" className={classes.title}>
                {shipment.shipper.address + ', '} {shipment.shipper.city + ' -'}
                {shipment.shipper.postalCode + '- '}
                {shipment.shipper.state} {shipment.shipper.country}
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
                &nbsp;&nbsp;
                <Moment format="YYYY/MM/DD">{shipment.departureDate}</Moment>
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
        <Grid item xs={12} md={6} lg={5}>
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
            <Typography component="h6" variant="h6" className={classes.title}>
              {shipment.receiver.address + ', '} {shipment.receiver.city + ' -'}
              {shipment.receiver.postalCode + '- '}
              {shipment.receiver.state} {shipment.receiver.country}
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
                &nbsp;&nbsp;
                <Moment format="YYYY/MM/DD">{shipment.deliveryDate}</Moment>
              </Typography>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Details shipment={shipment} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <IoTDetails shipment={shipment} />
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

        <Grid item xs={12} md={12}>
          <Chart />
        </Grid>

        <Grid item xs={12} md={12}>
          <Chart1 />
        </Grid>
        <Grid item xs={12} md={12}>
          <Chart2 />
        </Grid>
        <Grid item xs={12} md={12}>
          <Map />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

Tracker.propTypes = {
  getShipment: PropTypes.func.isRequired,
  shipment: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  shipment: state.shipment
});

export default connect(mapStateToProps, { getShipment })(Tracker);
