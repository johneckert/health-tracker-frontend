import React, { Component } from 'react';
import WeekForm from './WeekForm';
import DayForm from './DayForm';
import SelectUser from '../components/SelectUser';
import DayViz from '../components/DayViz';
import WeekViz from '../components/WeekViz';

class HealthContainer extends Component {
  state = {
    users: [],
    currentUser: {}
  };

  componentDidMount() {
    this.getUsers().then(users => {
      this.setState({ ...this.state, users: users });
    });
  }

  setCurrentUser = id => {
    const relevantUser = this.state.users.filter(user => user.id === parseInt(id, 10));
    this.setState({ ...this.state, currentUser: relevantUser[0] });
  };

  getUsers = () => {
    return fetch('https://skinnybitches-api.herokuapp.com/users').then(response => response.json());
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
          <div>
            <DayViz />
            <DayForm currentUser={this.state.currentUser} />
            <WeekViz />
            <WeekForm currentUser={this.state.currentUser} />
          </div>
        ) : (
          <img src="/tenor.gif" alt="fat pusheen bouncing" />
        )}
      </div>
    );
  }
}

export default HealthContainer;
