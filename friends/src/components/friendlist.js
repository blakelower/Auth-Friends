import React from "react";
import { connect } from "react-redux";
import { loadFriends } from "../actions";
import Friend from "./friend";
import AddFriendForm from "./addfriendform";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.loadFriends();
  }
  render() {
    return (
      <div>
        <h2>My Friends</h2>
        {this.props.friends.map(friend => {
          return <Friend friend={friend} />;
        })}
        <AddFriendForm />
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapPropsToState, { loadFriends })(FriendsList);
