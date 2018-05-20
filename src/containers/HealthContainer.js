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
    const relevantUser = this.state.users.filter(user => user.id == id);
    this.setState({ ...this.state, currentUser: relevantUser[0] });
  };

  getUsers = () => {
    return fetch('http://localhost:3000/users').then(response => response.json());
  };

  render() {
    console.log('set c_user', this.state.currentUser);
    return (
      <div>
        <SelectUser users={this.state.users} setCurrentUser={this.setCurrentUser} />
        <DayViz />
        <DayForm />
        <WeekViz />
        <WeekForm />
      </div>
    );
  }
}

export default HealthContainer;
