import {
  SET_ERROR,
  SET_LOADING,
  SET_SELECTED_USER,
  SET_USERS,
  SET_USER_ORDER_DETAILS,
} from "./types";

export const fetchUsers = (data) => {
  return {
    type: SET_USERS,
    payload: data,
  };
};

export const fetchUserDetails = (data) => {
  return {
    type: SET_SELECTED_USER,
    payload: data,
  };
};

export const fetchUserOrderDetails = (data) => {
  return {
    type: SET_USER_ORDER_DETAILS,
    payload: data,
  };
};

export const setLoading = (data) => {
  return {
    type: SET_LOADING,
    payload: data,
  };
};

export const setError = (data) => {
  return {
    type: SET_ERROR,
    payload: data,
  };
};
