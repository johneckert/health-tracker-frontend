import React, { Component } from 'react';
import DateInput from '../components/DateInput';
import NumberInput from '../components/NumberInput';

class WeekForm extends Component {
  state = {
    weight: '0',
    waist: '0',
    body_fat: '0',
    date: ''
  };

  handleWeekSubmit = () => {
    const weekData = {
      weight: parseFloat(this.state.weight) || 0,
      waist: parseFloat(this.state.waist) || 0,
      body_fat: parseFloat(this.state.body_fat) || 0,
      user_id: this.props.currentUser.id,
      date: this.props.date
    };
    fetch('https://skinnybitches-api.herokuapp.com/weeks', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(weekData)
    })
      .then(response => response.json())
      .then(alert('Week Logged!! Good Job!!!!'));
  };

  handleChange = event => this.setState({ ...this.state, [event.target.name]: event.target.value });

  handleNumChange = event => {
    this.setState({ ...this.state, [event.target.name]: parseFloat(event.target.value) });
  };

  render() {
    return (
      <div className="form">
        <h2>Week Form </h2>
        <NumberInput name="weight" value={this.state.weight} handleChange={this.handleChange} />
        <NumberInput name="waist" value={this.state.waist} handleChange={this.handleChange} />
        <NumberInput name="body_fat" value={this.state.body_fat} handleChange={this.handleChange} />
        <DateInput name="date" handleDateChange={this.handleDateChange} date={this.props.date} />

        <button onClick={() => this.handleWeekSubmit()}>Log It</button>
      </div>
    );
  }
}

export default WeekForm;
