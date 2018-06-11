import React, { Component } from 'react';

class SelectUser extends Component {
  handleChange = event => {
    this.props.setCurrentUser(event.target.value);
  };

  render() {
    return (
      <div className="nav">
        <h1>Skinny Bitches</h1>
        <select defaultValue="label" onChange={this.handleChange}>
          <option value="label" disabled>
            Select User
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
