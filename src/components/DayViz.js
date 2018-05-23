import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class DayViz extends Component {
  state = {
    options: {
      title: 'Day Scores',
      hAxis: { title: 'Day', minValue: 0, maxValue: 31 },
      vAxis: { title: 'Score', minValue: 0, maxValue: 20 },
      // bar: { groupWidth: '95%' },
      legend: 'none'
    },
    graphData: [],
    currentMonth: 5
  };

  componentDidMount() {
    //set current month
    this.setMonth();
    this.getAllDays().then(json => {
      //filter by user
      const userDays = json.filter(day => day.user_id === this.props.user_id);
      //filter only current month
      userDays.filter(day => parseInt(day.date.split('-')[1], 10) === this.state.currentMonth);

      const graphData = this.createDataPoints(userDays);
      this.setState({ ...this.state, graphData: graphData });
    });
  }

  setMonth = () => {
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

  getAllDays = () => {
    return fetch('https://skinnybitches-api.herokuapp.com/days').then(response => response.json());
  };

  render() {
    return (
      <div>
        <Chart
          chartType="ColumnChart"
          data={this.state.graphData}
          options={this.state.options}
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
