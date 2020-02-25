import axios from "axios";
import axiosWithAuth from "../utils/axiosAuth";

export const LOGIN = "LOGIN";
export const LOGGEDIN = "LOGGEDIN";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const FRIEND_LOADING = "FRIEND_LOADING";
export const FRIEND_SUCCESS = "FRIEND_SUCCESS";
export const FRIEND_FALURE = "FRIEND_FALURE";


export const login = credentials => dispatch => {
  dispatch({ type: LOGIN });
  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGGEDIN, payload: res.data.payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const loadFriends = () => {
  return dispatch => {
    dispatch({ type: FRIEND_LOADING });
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res.data);
        dispatch({ type: FRIEND_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const ADD_FRIEND = "ADD_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const EDIT_FRIEND = "EDIT_FRIEND";

export const editFriend = id => {
  return dispatch => {
    axiosWithAuth()
      .put(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        console.log(res);
        dispatch({ type: EDIT_FRIEND, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addFriend = newFriend => {
  return dispatch => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(res => {
        console.log("This is the post response", res.data);
        dispatch({ type: ADD_FRIEND, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deleteFriend = id => {
  return dispatch => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        console.log(res);
        dispatch({ type: DELETE_FRIEND, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
