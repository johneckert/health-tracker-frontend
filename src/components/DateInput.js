import React, { Component } from 'react';

class DateInput extends Component {
  setDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    dd < 10 ? (dd = '0' + dd) : dd;
    mm < 10 ? (mm = '0' + mm) : mm;
    this.setState({ ...this.state, date: `${yyyy}-${mm}-${dd}` });
  };

  componentDidMount() {
    this.setDate();
  }

  render() {
    return (
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
      </div>
    );
  }
}

export default DateInput;
