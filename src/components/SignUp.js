import React from "react";
import Header from "./Header";

class SignUp extends React.Component {
  state = {
    password: "",
    confirmPassword: ""
  };

  myUser = React.createRef();

  handlePassword = event => {
    this.setState({ password: event.currentTarget.value });
  };

  handleConfirmPassword = event => {
    this.setState({ confirmPassword: event.currentTarget.value });
  };

  openMyAccount = event => {
    event.preventDefault(); //Stop page from refreshing on onSubmit
    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords do not match");
    } else {
      const userName = this.myUser.current.value; //Get text value from input
      this.props.history.push(`/user/${userName}`); //Change the page
    }
  };

  // check = () => {};

  render() {
    return (
      <form id="sign-in" onSubmit={this.openMyAccount}>
        <Header />
        <div id="name">
          <label name="name">
            Name:
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              ref={this.myUser}
            />
          </label>
        </div>

        <div id="pw">
          <label name="password">
            Password:
            <input
              name="password"
              type="password"
              onChange={this.handlePassword}
              placeholder="Enter your password"
              required
            />
          </label>
        </div>

        <div id="pw">
          <label name="password">
            Confirm Password:
            <input
              name="confirm_password"
              type="password"
              onChange={this.handleConfirmPassword}
              // onKeyUp={this.check}
              placeholder="Confirm your password"
              required
            />
          </label>
        </div>
        <button>Sign Up</button>
      </form>
    );
  }
}

export default SignUp;
