import React from "react";

class UsernameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          // eslint-disable-next-line react/destructuring-assignment
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default UsernameInput;
