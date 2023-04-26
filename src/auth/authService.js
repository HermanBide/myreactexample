import axios from "axios";

const API_URL = "/api/v1/user/signup";

// const API_URL2 = "/http://localhost:8077/api/v1/user/signup";

// const API_URL3 = "/http://localhost:8077/api/v1/user/authenticate";

const register = async (userData) => {
  const response = await axios.post("/http://localhost:8077/api/v1/user/signup", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};


const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};


const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};


export default authService;
