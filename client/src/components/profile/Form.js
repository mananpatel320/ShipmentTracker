import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const currencies = [
  {
    value: '0',
    label: 'None'
  },
  {
    value: '1',
    label: 'Consignment Shipper'
  },
  {
    value: '2',
    label: 'Consignment Receiver'
  },
  {
    value: '3',
    label: 'Logistic Provider'
  },
  {
    value: '4',
    label: 'Insurance Provider'
  },
  {
    value: '5',
    label: 'Vehicle Operator'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch'
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const Form = ({ auth: { firstName, lastName, username, category, email } }) => {
  const classes = useStyles();
  var str;
  if (category == 1) {
    str = 'Consignment Shipper';
  } else if (category == 2) {
    str = 'Consignment Receiver';
  } else if (category == 2) {
    str = 'Logistic Provider';
  } else if (category == 2) {
    str = 'Insurance Provider';
  } else if (category == 2) {
    str = 'Vehicle Operator';
  } else {
  }

  return (
    <React.Fragment>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            disabled="true"
            defaultValue={firstName}
          >
            {firstName}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            disabled="true"
            defaultValue={lastName}
          >
            {lastName}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            fullWidth
            autoComplete="username"
            defaultValue={username}
            disabled="true"
          >
            {username}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            required
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
            defaultValue={email}
            disabled="true"
          >
            {email}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="category"
            required
            name="category"
            label="Category"
            fullWidth
            autoComplete="category"
            defaultValue={str}
            disabled="true"
          >
            {category}
          </TextField>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Form;
