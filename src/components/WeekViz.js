import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class WeekViz extends Component {
  optionsWeight = () => {
    return {
      title: 'Weight',
      hAxis: { title: 'Day', minValue: 0, maxValue: 31 },
      vAxis: { title: 'Pounds', minValue: 0, maxValue: 300 },
      curveType: 'function',
      colors: ['#39E60C'],
      lineWidth: 5,
      legend: 'none'
    };
  };
  optionsWaist = () => {
    return {
      title: 'Waist',
      hAxis: { title: 'Day', minValue: 0, maxValue: 31 },
      vAxis: { title: 'Inches', minValue: 0, maxValue: 50 },
      curveType: 'function',
      colors: ['#FF290D'],
      lineWidth: 5,
      legend: 'none'
    };
  };

  optionsBMI = () => {
    return {
      title: 'Waist',
      hAxis: { title: 'Day', minValue: 0, maxValue: 31 },
      vAxis: { title: '%', minValue: 0, maxValue: 100 },
      curveType: 'function',
      colors: ['#FFD60D'],
      lineWidth: 5,
      legend: 'none'
    };
  };

  createDataPoints = (weekArray, graph_id) => {
    let unit = '';
    let measurementVal = '';
    if (graph_id === 'weight') {
      unit = 'Pounds';
    } else if (graph_id === 'waist') {
      unit = 'Inches';
    } else {
      unit = '% Body Fat';
    }
    const graphArray = [['Day', `${unit}`]];
    weekArray.forEach(week => {
      let dateVal = [week.date.split('-')[1], week.date.split('-')[2]].join('-');
      if (graph_id === 'weight') {
        measurementVal = week.weight;
      } else if (graph_id === 'waist') {
        measurementVal = week.waist;
      } else {
        measurementVal = week.body_fat;
      }
      const dataPoint = [dateVal, measurementVal];
      graphArray.push(dataPoint);
    });
    //
    // while (graphArray.length < 31) {
    //   graphArray.push(['', '', '#ffffff']);
    // }

    return graphArray;
  };

  buildGraph = graph_id => {
    const userWeeks = this.props.weeks.filter(week => week.user_id === this.props.currentUser.id);
    const sortedWeeks = userWeeks.sort((a, b) => {
      if (a.date.split('-')[2] < b.date.split('-')[2]) {
        return -1;
      }
      if (a.date.split('-')[2] > b.date.split('-')[2]) {
        return 1;
      } else {
        return 0;
      }
    });
    const graphData = this.createDataPoints(sortedWeeks, graph_id);
    return graphData;
  };

  render() {
    return (
      <div>
        <Chart
          chartType="LineChart"
          data={this.buildGraph('weight')}
          options={this.optionsWeight()}
          graph_id="weight"
          width="100%"
          height="400px"
          legend_toggle
        />
        <Chart
          chartType="LineChart"
          data={this.buildGraph('waist')}
          options={this.optionsWaist()}
          graph_id="waist"
          width="100%"
          height="400px"
          legend_toggle
        />
        <Chart
          chartType="LineChart"
          data={this.buildGraph('bmi')}
          options={this.optionsBMI()}
          graph_id="bmi"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>
    );
  }
}

export default WeekViz;
