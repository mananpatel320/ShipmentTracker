import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  ZoomAndPan,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';

import { scaleTime } from 'd3-scale';
import { ArgumentScale } from '@devexpress/dx-react-chart';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

import PostData from './chdata.json';

const data = [];
{
  PostData.map((postDetail, index) => {
    return data.push({
      lb: postDetail.lb,
      ub: postDetail.ub,
      x: new Date(postDetail.x),
      y: postDetail.y
    });
  });
}

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
              <ValueAxis />

              <LineSeries
                valueField="y"
                argumentField="x"
                name="x:Time, y:Temperature(°C)"
                color="#0595fc"
                Legend
              />

              <LineSeries
                valueField="ub"
                argumentField="x"
                name="Upper Bound"
                color="#fc5805"
              />
              <LineSeries
                valueField="lb"
                argumentField="x"
                name="Lower Bound"
                color="#05fc6c"
              />

              <Title text="Temperature" />
            </Chart>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
