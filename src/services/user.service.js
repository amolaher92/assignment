import axiosInstance from "../../axios";

let response;

const user = {
  getAllUsers: async (payload) => {
    try {
      response = await axiosInstance.get("users", payload);
      return response.data;
    } catch (err) {
      const { name, message } = err;
      response = `${name} => ${message}`;
    }
  },
  getSingleUser: async (id) => {
    try {
      response = await axiosInstance.get(`users/${id}`);
      return response.data;
    } catch (err) {
      const { name, message } = err;
      response = `${name} => ${message}`;
    }
  },
  createUser: async (payload) => {
    try {
      response = await axiosInstance.post("users", payload);
      return response.data;
    } catch (err) {
      const { name, message } = err;
      response = `${name} => ${message}`;
    }
  },
};

export default user;
