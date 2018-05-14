import React, { Component } from 'react';

class WeekForm extends Component {
  state = {
    weight: 0,
    waist: 0,
    bodyFat: 0,
    date: ''
  };

  setDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    dd < 10 ? (dd = '0' + dd) : dd;
    mm < 10 ? (mm = '0' + mm) : mm;
    this.setState({ ...this.state, date: `${yyyy}-${mm}-${dd}` });
  };

  handleChange = event => this.setState({ ...this.state, [event.target.name]: event.target.value });

  componentDidMount() {
    this.setDate();
  }

  render() {
    console.log(this.state.date);
    return (
      <form>
        <h2>Week Form </h2>
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          step="0.01"
          name="weight"
          value={this.state.weight}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="waist">Waist</label>
        <input
          type="number"
          step="0.01"
          name="waist"
          value={this.state.waist}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="bodyFat">Body Fat</label>
        <input
          type="number"
          step="0.01"
          name="bodyFat"
          value={this.state.bodyFat}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default WeekForm;
