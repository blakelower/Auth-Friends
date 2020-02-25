import React from "react";
import { connect } from "react-redux";
import { deleteFriend } from "../actions";

class Friend extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="friends-wrapper">
        <h4>{this.props.friend.name}</h4>
        <p>Age: {this.props.friend.age}</p>
        <p>Email: {this.props.friend.email} </p>
        <button onClick={() => this.props.deleteFriend(this.props.friend.id)}>
          Remove Friend
        </button>
      </div>
    );
  }
}
export default connect(null, { deleteFriend })(Friend);
