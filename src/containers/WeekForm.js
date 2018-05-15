import React, { Component } from 'react';
import DateInput from '../components/DateInput';
import NumberInput from '../components/NumberInput';

class WeekForm extends Component {
  state = {
    weight: 0,
    waist: 0,
    body_fat: 0,
    date: ''
  };

  setDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    this.setState({ ...this.state, date: `${yyyy}-${mm}-${dd}` });
  };

  handleChange = event => this.setState({ ...this.state, [event.target.name]: event.target.value });

  handleWeekSubmit = event => {
    event.preventDefault();
  };

  componentDidMount() {
    this.setDate();
  }

  render() {
    return (
      <div>
        <h2>Week Form </h2>
        <NumberInput name="weight" value={this.state.weight} onChange={this.handleChange} />
        <NumberInput name="waist" value={this.state.waist} onChange={this.handleChange} />
        <NumberInput name="body_fat" value={this.state.body_fat} onChange={this.handleChange} />
        <DateInput name="date" handleChange={this.handleChange} date={this.state.date} />
        <button onClick={this.handleWeekSubmit}>Log It</button>
      </div>
    );
  }
}

export default WeekForm;
