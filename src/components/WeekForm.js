import React, { Component } from 'react';

class WeekForm extends Component {
  state = {
    weight: 0,
    waist: 0,
    bodyFat: 0,
    date: ''
  };

  handleChange = event => this.setState({ ...this.state, [event.target.name]: event.target.value });

  render() {
    return (
      <form>
        <h2>Week Form </h2>
        <input
          type="number"
          step="0.01"
          name="weight"
          placeholder="Weight"
          onChange={this.handleChange}
        />
        <input
          type="number"
          step="0.01"
          name="waist"
          placeholder="Waist"
          onChange={this.handleChange}
        />
        <input
          type="number"
          step="0.01"
          name="bodyFat"
          placeholder="Body Fat"
          onChange={this.handleChange}
        />
        <input type="date" name="date" placeholder="Date" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}

export default WeekForm;
