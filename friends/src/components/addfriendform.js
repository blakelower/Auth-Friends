import React from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions";

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      age: "",
      email: ""
    };
  }
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <form>
        <h4>Add a Friend:</h4>
        <input
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChanges}
        ></input>
        <input
          placeholder="Age"
          name="age"
          value={this.state.age}
          onChange={this.handleChanges}
        ></input>
        <input
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleChanges}
        ></input>
        <button
          onClick={event => {
            event.preventDefault();
            this.props.addFriend(this.state);
          }}
        >
          Add Friend
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};
export default connect(mapStateToProps, { addFriend })(AddFriendForm);
