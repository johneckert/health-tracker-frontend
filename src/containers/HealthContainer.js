import React, { Component } from 'react';
import WeekForm from '../components/WeekForm';
import DayForm from '../components/DayForm';

class HealthContainer extends Component {
  render() {
    return (
      <div>
        Health Container
        <DayForm />
        <WeekForm />
      </div>
    );
  }
}

export default HealthContainer;
