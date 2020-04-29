import {
  GET_USER_DATA,
  USER_DATA_LOADING,
  SET_STATUS_ON_LOAD,
  SET_USER_PROFILE_PICTURE,
} from "../actions/types";

const initialState = {
  userData: null,
  userDataLoading: false,
  statusIsSet: false,
};

export default function (state = initialState, action) {
  let newState;
  switch (action.type) {
    case USER_DATA_LOADING:
      return {
        ...state,
        userDataLoading: true,
      };
    case SET_USER_PROFILE_PICTURE:
      if (action.payload.broadcast) return state;
      newState = { ...state };
      newState.userData.profilePicture = action.payload.img;
      return newState;
    case GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        userDataLoading: false,
      };
    case SET_STATUS_ON_LOAD:
      return {
        ...state,
        statusIsSet: true,
      };
    default:
      return state;
  }
}
