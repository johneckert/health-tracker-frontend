import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class DayViz extends Component {
  getMonth = () => {
    let today = new Date();
    this.setState({ ...this.state, currentMonth: today.getMonth() });
  };

  getColor = carbs => {
    if (carbs < 2) {
      return '#39E60C';
    } else if (carbs > 2) {
      return '#FF290D';
    } else {
      return '#FFD60D';
    }
  };

  options = () => {
    return {
      title: 'Day Scores',
      hAxis: { title: 'Day', minValue: 0, maxValue: 31 },
      vAxis: { title: 'Score', minValue: 0, maxValue: 20 },
      legend: 'none'
    };
  };

  createDataPoints = dayArray => {
    const graphArray = [['Day', 'Score', { role: 'style' }]];
    dayArray.forEach(day => {
      let dateVal = [day.date.split('-')[1], day.date.split('-')[2]].join('-');
      let scoreVal = day.hunger + day.cravings + day.satiety + day.energy_level + day.well_being;
      let colorVal = this.getColor(day.processed_carbs);
      const dataPoint = [dateVal, scoreVal, colorVal];
      graphArray.push(dataPoint);
    });

    while (graphArray.length < 31) {
      graphArray.push(['', '', '#ffffff']);
    }

    return graphArray;
  };

  buildGraph = () => {
    const userDays = this.props.days.filter(day => day.user_id === this.props.currentUser.id);
    const sortedDays = userDays.sort((a, b) => {
      if (a.date.split('-')[2] < b.date.split('-')[2]) {
        return -1;
      }
      if (a.date.split('-')[2] > b.date.split('-')[2]) {
        return 1;
      } else {
        return 0;
      }
    });
    //filter only current month
    sortedDays.filter(
      day => parseInt(day.date.split('-')[1], 10) === this.props.date.split('-')[1]
    );

    const graphData = this.createDataPoints(userDays);
    return graphData;
  };

  render() {
    return (
      <div>
        <Chart
          chartType="ColumnChart"
          data={this.buildGraph()}
          options={this.options()}
          graph_id="ColumnChart"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>
    );
  }
}

export default DayViz;
