import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import Dropdown from "react-bootstrap";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import { makeStyles } from "@material-ui/core/styles";
// import { typography } from "material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// import MaterialTable from "material-table";
// const targetArray=["Cafe","Restraunts"];

export default function IoT() {
  //const classes = useStyles();
  // const [iot, setIoT] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const handleChange1 = (event) => {
    setChecked(event.target.checked);
  };

  const [pres, setPres] = React.useState(false);
  const handlePres = (event) => {
    setPres(event.target.checked);
  };

  const [vibr, setVibr] = React.useState(false);
  const handleVibr = (event) => {
    setVibr(event.target.checked);
  };

  const [gps] = React.useState(true);

  // const [state, setState] = React.useState({
  //   columns: [{ title: "Name", field: "name" }],
  //   data: [{ name: "Mehmet" }, { name: "Zerya Betül" }],
  // });

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
        Configure IoT Devices
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Checkbox
            checked={checked}
            onChange={handleChange1}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <typography variant="h6">Temperature</typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="opValue"
            label="Optimum Value"
            fullWidth
            disabled={!checked}
            InputProps={{
              endAdornment: <InputAdornment position="end"> °C</InputAdornment>,
            }}
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="mError"
            label="Margin of Error"
            fullWidth
            disabled={!checked}
            InputProps={{
              endAdornment: <InputAdornment position="end"> °C</InputAdornment>,
            }}
            type="number"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Checkbox
            checked={pres}
            onChange={handlePres}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <typography variant="h6">Pressure</typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="opValue"
            label="Optimum Value"
            fullWidth
            disabled={!pres}
            InputProps={{
              endAdornment: <InputAdornment position="end"> Pa</InputAdornment>,
            }}
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="mError"
            label="Margin of Error"
            fullWidth
            disabled={!pres}
            InputProps={{
              endAdornment: <InputAdornment position="end"> Pa</InputAdornment>,
            }}
            type="number"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Checkbox
            checked={vibr}
            onChange={handleVibr}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <typography variant="h6">Vibration</typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="opValue"
            label="Optimum Value"
            fullWidth
            disabled={!vibr}
            InputProps={{
              endAdornment: <InputAdornment position="end"> Hz</InputAdornment>,
            }}
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="mError"
            label="Margin of Error"
            fullWidth
            disabled={!vibr}
            InputProps={{
              endAdornment: <InputAdornment position="end"> Hz</InputAdornment>,
            }}
            type="number"
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <Checkbox
            checked={gps}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <typography variant="h6">G.P.S.</typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

/* <FormControl>
            <InputLabel id="demo-simple-select-label">
              IoT Device Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={iot}
              onChange={handleChange}
              style={{ width: "180px" }}
            >
              <MenuItem value={1}>Type 1</MenuItem>
              <MenuItem value={2}>Type 2</MenuItem>
            </Select>
          </FormControl> */
