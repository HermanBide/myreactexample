import axios from "axios";


const register = (firstname, lastname, email, password) => {
  return axios.post('/http://localhost:8077/api/v1/user/signup', + "signup", {
    firstname,
    lastname,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post("/http://localhost:8077/api/v1/user/authenticate", + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("token", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

const auth = {
  register,
  login,
  logout,
};

export default auth;
