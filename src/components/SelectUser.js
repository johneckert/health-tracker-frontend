import React, { Component } from 'react';

class SelectUser extends Component {
  handleChange = event => {
    this.props.setCurrentUser(event.target.value);
  };

  render() {
    return (
      <div>
        <h2>Select User</h2>
        <select defaultValue="label" onChange={this.handleChange}>
          <option value="label" disabled>
            Select user
          </option>
          {this.props.users.map(user => {
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
