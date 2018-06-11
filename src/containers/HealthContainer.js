import React, { Component } from 'react';
import WeekForm from './WeekForm';
import DayForm from './DayForm';
import SelectUser from '../components/SelectUser';
import DayViz from '../components/DayViz';
import WeekViz from '../components/WeekViz';

class HealthContainer extends Component {
  state = {
    days: [],
    weeks: [],
    users: [],
    currentUser: {},
    date: ''
  };

  componentDidMount() {
    this.getUsers().then(users => {
      this.setState({ ...this.state, users: users });
    });
    this.getDays().then(days => {
      this.setState({ ...this.state, days: days });
    });
    this.getWeeks().then(weeks => {
      this.setState({ ...this.state, weeks: weeks });
    });
    this.setDate();
  }

  setCurrentUser = id => {
    const relevantUser = this.state.users.filter(user => user.id === parseInt(id, 10));
    this.setState({ ...this.state, currentUser: relevantUser[0] });
  };

  getUsers = () => {
    return fetch('https://skinnybitches-api.herokuapp.com/users').then(response => response.json());
  };

  getDays = () => {
    return fetch('https://skinnybitches-api.herokuapp.com/days').then(response => response.json());
  };

  getWeeks = () => {
    return fetch('https://skinnybitches-api.herokuapp.com/weeks').then(response => response.json());
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
    let currentDate = `${yyyy}-${mm}-${dd}`;
    this.setState({ ...this.state, date: currentDate });
  };

  handleDateChange = event => {
    this.setState({ ...this.state, date: event.target.value });
  };

  render() {
    return (
      <div>
        <SelectUser
          users={this.state.users}
          setCurrentUser={this.setCurrentUser}
          currentUser={this.currentUser}
        />
        {this.state.currentUser.username ? (
          <div className="main-container">
            <DayViz
              days={this.state.days}
              currentUser={this.state.currentUser}
              date={this.state.date}
            />
            <DayForm
              currentUser={this.state.currentUser}
              date={this.state.date}
              handleDateChange={this.handleDateChange}
            />
            <WeekViz
              weeks={this.state.weeks}
              currentUser={this.state.currentUser}
              date={this.state.date}
            />
            <WeekForm
              currentUser={this.state.currentUser}
              date={this.state.date}
              handleDateChange={this.handleDateChange}
            />
          </div>
        ) : (
          <div className="image-container">
            <img src="/tenor.gif" alt="fat pusheen bouncing" />
          </div>
        )}
      </div>
    );
  }
}

export default HealthContainer;
