import http from "../http-common";

export const getAllUsers = () => {
  return http.get("/users");
};

export const getOrdersByUser = (id) => {
  return http.get(`/users/${id}/orders`);
};
