import React from "react";
import { connect } from "react-redux";
import { login, loadFriends } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => {
        this.props.history.push("/friends");
      })
      .then(() => {
        this.props.loadFriends();
      });
  };

  render() {
    return (
      <div className="pa4 black-80">
        <h2>Log In</h2>
        <form>
          <label className="db fw4 lh-copy f6">User</label>
          <input
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="username"
            className="b pa2 input-reset ba bg-transparent"
          ></input>
          <label className="db fw4 lh-copy f6">Password</label>
          <input
            name="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="password"
            className="b pa2 input-reset ba bg-transparent"
          />
          <span className="mt3">
            <button
              onClick={this.login}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
            >
              Log In
            </button>
            {this.props.loggingIn ? <h3>Loading Data</h3> : null}
          </span>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loggingIn,
  error: state.error,
  friends: state.friends
});

export default connect(mapStateToProps, { login, loadFriends })(Login);
