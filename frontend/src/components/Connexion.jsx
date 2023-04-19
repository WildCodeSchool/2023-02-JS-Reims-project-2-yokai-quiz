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
      <>
        <label htmlFor="username">What's your name hero ?</label>

        <input
          type="text"
          id="username"
          // eslint-disable-next-line react/destructuring-assignment
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
        />
      </>
    );
  }
}

export default UsernameInput;
