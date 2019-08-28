import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

class SignIn extends React.Component {
  myUser = React.createRef();

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  //custom methods
  openMyAccount = event => {
    //1.Stop page from refreshing on onSubmit
    event.preventDefault();
    //2.Get text value from input
    const userName = this.myUser.current.value;
    //3.Change the page
    this.props.history.push(`/user/${userName}`);
  };
  goToSignUp = event => {
    event.preventDefault();
    this.props.history.push(`/signup`);
  };

  render() {
    return (
      <form id="sign-in" onSubmit={this.openMyAccount}>
        <Header />
        <p>Existing User? Sign In!!!</p>

        <div id="name">
          <label name="name">
            Name:
            <input
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
            <input type="password" placeholder="Enter your password" required />
          </label>
        </div>
        <button>Sign In</button>

        <div>
          <p>New User? </p>
          <button onClick={this.goToSignUp}>Sign Up</button>{" "}
          {/*onClick is an event handler*/}
        </div>
      </form>
    );
  }
}

export default SignIn;
