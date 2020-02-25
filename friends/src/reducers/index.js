import {
  LOGIN,
  LOGGEDIN,
  LOGIN_FAILURE,
  FRIEND_LOADING,
  FRIEND_SUCCESS,
  FRIEND_FALURE,
  ADD_FRIEND,
  EDIT_FRIEND,
  DELETE_FRIEND
} from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  loggingIn: false,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        error: "",
        loggingIn: true
      };
    case LOGGEDIN:
      return {
        ...state,
        error: "",
        loggingIn: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false
      };
    case FRIEND_LOADING:
      return { ...state, fetchingFriends: true, friends: [], error: null };
    case FRIEND_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload,
        error: null
      };
    case FRIEND_FALURE:
      return {
        ...state,
        fetchingFriends: false,
        friends: [],
        error: "data did not load"
      };
    case ADD_FRIEND:
      return { ...state, friends: action.payload };
    case DELETE_FRIEND:
      return { ...state, friends: action.payload };
    case EDIT_FRIEND:
      return{...state, friends: action.payload};
    default:
      return state;
  }
}
export default reducer;
