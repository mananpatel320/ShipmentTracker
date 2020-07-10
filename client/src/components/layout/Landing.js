import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1500,
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  media: {
    height: 440
  },
  paper: {
    // marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      //  marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid
      container
      //   spacing={3}
      sdirection="column"
      justify="center"
      alignItems="center"
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://image.shutterstock.com/image-illustration/cargo-loading-operation-shipment-delivery-260nw-321469706.jpg"
            title="Shipment Tracker"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              SHIPMENT TRACKER
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              We establish a tamper-proof and reliable mechanism among all the
              parties concerned, by using IoT and Blockchain, so as to prevent
              blame games and maintain an authentic source of trusted
              information in this cyber world. This mechanism will help us to
              track that if anything wrong happens with consignment, then what
              went wrong and where it went wrong.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: '40%' }}
            component={Link}
            to="/login"
          >
            LOGIN
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/register"
          >
            REGISTER
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
