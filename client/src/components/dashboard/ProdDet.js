import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import Dropdown from "react-bootstrap";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
// import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
// import moment from "moment";

// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import { MuiPickersUtilsProvider } from 'material-ui-pickers';
// import { TimePicker } from 'material-ui-pickers/TimePicker';
// import { DatePicker } from 'material-ui-pickers/DatePicker';

// import MuiPickersUtilsProvider from '@material-ui-pickers/MuiPickersUtilsProvider';
// import KeyboardTimePicker from '@material-ui-pickers/KeyboardTimePicker';
// import KeyboardDatePicker from '@material-ui-pickers/KeyboardDatePicker';
// const targetArray=["Cafe","Restraunts"];
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function ProdDet() {
  //const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [age1, setAge1] = React.useState("");
  const [age2, setAge2] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };

  const [selectedDatePick, setSelectedDatePick] = React.useState(new Date());

  const handleDateChangePick = (date) => {
    setSelectedDatePick(date);
  };

  const [selectedDateDrop, setSelectedDateDrop] = React.useState(new Date());

  const handleDateChangeDrop = (date) => {
    setSelectedDateDrop(date);
  };

  // const useStyles = makeStyles((theme) => ({
  //   formControl: {
  //     margin: theme.spacing(1),
  //     minWidth: 120,
  //   },
  //   selectEmpty: {
  //     marginTop: theme.spacing(2),
  //   },
  // }));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select Services
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Product Name"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            required
            id="expDate"
            label="Quantity"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Fragile</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              style={{ width: "80px" }}
            >
              <MenuItem value={1}>Yes</MenuItem>
              <MenuItem value={2}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl>
            <InputLabel
              id="demo-simple-select-label"
              style={{ width: "800px" }}
            >
              Insurance Provider
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age1}
              onChange={handleChange1}
              style={{ width: "180px" }}
            >
              <MenuItem value={11}>Company A</MenuItem>
              <MenuItem value={12}>Company B</MenuItem>
              <MenuItem value={13}>Company C</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          /> */}
          <FormControl>
            <InputLabel
              id="demo-simple-select-label"
              style={{ width: "800px" }}
            >
              Logistic Operator
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age2}
              onChange={handleChange2}
              style={{ width: "180px" }}
            >
              <MenuItem value={21}>Company A</MenuItem>
              <MenuItem value={22}>Company B</MenuItem>
              <MenuItem value={23}>Company C</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* <Grid item xs={12} md={4}>
          
          <FormControl>
            <InputLabel
              id="demo-simple-select-label"
              style={{ width: "800px" }}
            >
              Vehicle Operator
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age3}
              onChange={handleChange3}
              style={{ width: "180px" }}
            >
              <MenuItem value={31}>Company A</MenuItem>
              <MenuItem value={32}>Company B</MenuItem>
              <MenuItem value={33}>Company C</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}

        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Date of Departure(MM/DD/YYYY)"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid> */}

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around" item xs={12} md={6}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date of Pickup"
              value={selectedDatePick}
              onChange={handleDateChangePick}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>

          <Grid container justify="space-around" item xs={12} md={6}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Promised Date of Delivery"
              value={selectedDateDrop}
              onChange={handleDateChangeDrop}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="Promised Date of Delivery"
            helperText=""
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid> */}

        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

/* <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />*/

/* 
        <div class="dropdown">
  <span>Mouse over me</span>
  <div class="dropdown-content">
    <p>Hello World!</p>
    <p>Hello World!</p>
    <p>Hello World!</p>
  </div>
</div> 
 <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
 <TextField required id="target" label="Select Target" fullWidth autoComplete="cc-name">
          {
            targetArray.map((option)=> (
              <MenuItem key={option} >
              {option}
              </MenuItem>
            ))
          }
        </TextField> */

// const [temp, setTemperature] = React.useState(false);
// const [pres, setPressure] = React.useState("");
// const [vibr, setVibration] = React.useState("");
// const [iot, setIoT] = React.useState("");
// const [checked, setChecked] = React.useState(false);

// const handleChange1 = (event) => {
//   setChecked(event.target.checked);
// };
// const handleChangeVibration = (event) => {
//   setVibration(event.target.value);
// };
// const handleChangeTemp = (event) => {
//   setTemperature(event.target.temp);
// };
// const handleChangePressure = (event) => {
//   setPressure(event.target.value);
// };
