import React, { Component } from 'react';
import WeekForm from './WeekForm';
import DayForm from './DayForm';

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
