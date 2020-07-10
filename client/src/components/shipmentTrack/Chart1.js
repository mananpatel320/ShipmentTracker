import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  ZoomAndPan,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import { scaleTime } from 'd3-scale';
import { ArgumentScale } from '@devexpress/dx-react-chart';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

// import dt from "./dt";

const generateData = (n) => {
  const ret = [];
  let y = 0;
  let lb = 20;
  let ub = 30;
  const dt = new Date();
  // for (let i = 0; i < n; i += 1) {
  //   dt.setHours(dt.getHours() + 1);
  //   y += Math.round(Math.random() * 10 - 5);
  //   ret.push({ x: new Date(dt), y, ub, lb });
  // }
  for (let i = 0; i < 50; i++) {
    y = 21;
    dt.setHours(dt.getHours() + 1);
    ret.push({ x: new Date(dt), y, ub, lb });
  }
  var k = 0.18;
  for (let i = 0; i < 50; i++) {
    y = y + k;
    dt.setHours(dt.getHours() + 1);
    ret.push({ x: new Date(dt), y, ub, lb });
  }
  k = 0.1;
  for (let i = 0; i < 50; i++) {
    y = y - k;
    dt.setHours(dt.getHours() + 1);
    ret.push({ x: new Date(dt), y, ub, lb });
  }
  for (let i = 0; i < 50; i++) {
    dt.setHours(dt.getHours() + 1);
    ret.push({ x: new Date(dt), y, ub, lb });
  }
  k = 0.04;
  for (let i = 0; i < 50; i++) {
    y = y - k;
    dt.setHours(dt.getHours() + 1);
    ret.push({ x: new Date(dt), y, ub, lb });
  }
  return ret;
};
const data = generateData(250);

const getMode = (zoom, pan) => {
  if (zoom && pan) {
    return 'both';
  }
  if (zoom && !pan) {
    return 'zoom';
  }
  if (!zoom && pan) {
    return 'pan';
  }
  return 'none';
};

const chartRootStyle = { marginRight: '20px' };
// const inputsContainerStyle = { justifyContent: "center" };

const ChartRoot = (props) => <Chart.Root {...props} style={chartRootStyle} />;

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
      zoomArgument: true,
      panArgument: true,
      zoomValue: false,
      panValue: false
    };
    this.submit = (e) =>
      this.setState({
        [e.target.id]: e.target.checked
      });
  }

  renderInput(id, label) {
    const { [id]: checked } = this.state;
    return (
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            checked={checked}
            onChange={this.submit}
            value="checkedB"
            color="primary"
          />
        }
        label={label}
      />
    );
  }

  render() {
    const {
      data: chartData,
      zoomValue,
      panValue,
      zoomArgument,
      panArgument
    } = this.state;
    return (
      <Grid container direction="column">
        <Grid item xs={12}>
          <Paper elevation={15}>
            <Chart data={chartData} rootComponent={ChartRoot}>
              <ArgumentScale factory={scaleTime} />
              <ArgumentAxis />
              <ValueAxis name="IoT" />

              <LineSeries
                valueField="y"
                argumentField="x"
                name="x:Time, y:Pressure(Pa)"
              />
              <LineSeries
                valueField="ub"
                argumentField="x"
                name="Upper Bound"
              />
              <LineSeries
                valueField="lb"
                argumentField="x"
                name="Lower Bound"
              />
              <ZoomAndPan
                interactionWithArguments={getMode(zoomArgument, panArgument)}
                interactionWithValues={getMode(zoomValue, panValue)}
              />
              {/* <Legend position="right" /> */}
              <Title text="Pressure" />
            </Chart>
            {/* <FormGroup style={inputsContainerStyle} row>
          {this.renderInput("zoomArgument", "Zoom argument")}
          {this.renderInput("panArgument", "Pan argument")}
          {this.renderInput("zoomValue", "Zoom value")}
          {this.renderInput("panValue", "Pan value")}
        </FormGroup> */}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
