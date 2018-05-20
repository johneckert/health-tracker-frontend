import React, { Component } from 'react';

class SelectUser extends Component {
  handleChange = event => {
    console.log(event.target.value);
    this.props.setCurrentUser(event.target.value);
  };

  render() {
    return (
      <div>
        <h2>Select User</h2>
        <select onChange={this.handleChange}>
          {this.props.users.map(user => {
            console.log(user);
            return (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default SelectUser;
