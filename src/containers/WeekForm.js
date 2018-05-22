import React, { Component } from 'react';
import DateInput from '../components/DateInput';
import NumberInput from '../components/NumberInput';

class WeekForm extends Component {
  state = {
    weight: '0.00',
    waist: '0.00',
    body_fat: '0.00',
    date: '',
    currentUser: {}
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

  handleWeekSubmit = () => {
    const weekData = {
      weight: this.state.weight,
      waist: this.state.waist,
      body_fat: this.state.body_fat,
      user_id: this.state.currentUser.id,
      date: this.state.date
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

  setCurrentUser = () => {
    this.setState({ ...this.state, currentUser: this.props.currentUser });
  };

  handleChange = event => this.setState({ ...this.state, [event.target.name]: event.target.value });

  componentDidMount() {
    this.setDate();
    this.setCurrentUser();
  }

  render() {
    return (
      <div>
        <h2>Week Form </h2>
        <NumberInput
          name="weight"
          value={parseInt(this.state.weight, 10)}
          handleChange={this.handleChange}
        />
        <NumberInput
          name="waist"
          value={parseInt(this.state.waist, 10)}
          handleChange={this.handleChange}
        />
        <NumberInput
          name="body_fat"
          value={parseInt(this.state.body_fat, 10)}
          handleChange={this.handleChange}
        />
        <DateInput name="date" handleChange={this.handleChange} date={this.state.date} />
        <button onClick={() => this.handleWeekSubmit()}>Log It</button>
      </div>
    );
  }
}

export default WeekForm;
