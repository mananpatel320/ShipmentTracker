import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

export default function ProdDet() {
  const [age, setAge] = React.useState('');
  const [age1, setAge1] = React.useState('');
  const [age2, setAge2] = React.useState('');

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
              style={{ width: '80px' }}
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
              style={{ width: '800px' }}
            >
              Insurance Provider
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age1}
              onChange={handleChange1}
              style={{ width: '180px' }}
            >
              <MenuItem value={11}>Company A</MenuItem>
              <MenuItem value={12}>Company B</MenuItem>
              <MenuItem value={13}>Company C</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl>
            <InputLabel
              id="demo-simple-select-label"
              style={{ width: '800px' }}
            >
              Logistic Operator
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age2}
              onChange={handleChange2}
              style={{ width: '180px' }}
            >
              <MenuItem value={21}>Company A</MenuItem>
              <MenuItem value={22}>Company B</MenuItem>
              <MenuItem value={23}>Company C</MenuItem>
            </Select>
          </FormControl>
        </Grid>

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
                'aria-label': 'change date'
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
                'aria-label': 'change date'
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
    </React.Fragment>
  );
}
