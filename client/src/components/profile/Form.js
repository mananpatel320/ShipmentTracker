import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const currencies = [
  {
    value: "0",
    label: "None",
  },
  {
    value: "1",
    label: "Consignment Shipper",
  },
  {
    value: "2",
    label: "Consignment Receiver",
  },
  {
    value: "3",
    label: "Logistic Provider",
  },
  {
    value: "4",
    label: "Insurance Provider",
  },
  {
    value: "5",
    label: "Vehicle Operator",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function Form() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState(0);
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
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
            defaultValue="John"
          />
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
            defaultValue="Doe"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            fullWidth
            autoComplete="username"
            defaultValue="user@1234"
            disabled="true"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            required
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select your role"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </form>
        <Button
          // variant="contained"
          // color="primary"
          fullWidth
          // onClick={handleNext}
          className={classes.button}
        >
          Save Changes
        </Button>
      </Grid>
    </React.Fragment>
  );
}
