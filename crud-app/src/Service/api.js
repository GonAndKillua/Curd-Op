import axios from "axios";

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = "http://localhost:8080/users";
const AuthUrl = "http://localhost:8080/auth";

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${usersUrl}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(`${usersUrl}/add`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

export const editUser = async (id, user) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};

export const LoginUserApi = async (user) => {
  return await axios.post(`${AuthUrl}/login`, user);
};
export const SignUpUserApi = async (user) => {
  return await axios.post(`${AuthUrl}/signup`, user);
};
