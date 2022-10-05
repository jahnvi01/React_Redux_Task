import {
  SET_ERROR,
  SET_LOADING,
  SET_SELECTED_USER,
  SET_USERS,
  SET_USER_ORDER_DETAILS,
} from "../../actions/types";

const initialState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: false,
  orders: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      state = { ...state, users: action.payload, loading: false, error: false };
      return state;

    case SET_SELECTED_USER:
      state = { ...state, selectedUser: action.payload };
      return state;
    case SET_USER_ORDER_DETAILS:
      state = {
        ...state,
        orders: action.payload,
        loading: false,
        error: false,
      };
      return state;
    case SET_LOADING:
      state = { ...state, loading: action.payload };
      return state;
    case SET_ERROR:
      state = { ...state, error: action.payload };
      return state;
    default:
      return state;
  }
};
