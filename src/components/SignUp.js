import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

class SignUp extends React.Component {
  state = {
    password: "",
    confirmPassword: ""
  };

  static propTypes = {
    history: PropTypes.object.isRequired
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
      <form className="my-form" onSubmit={this.openMyAccount}>
        <Header />
        <div className="form-group">
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

        <div className="form-group">
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

        <div className="form-group">
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
