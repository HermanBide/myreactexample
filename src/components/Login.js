import React, {
  useContext,
  useState,
} from "react";
import {
  Link,
   Navigate
} from "react-router-dom";
import axios from "axios"
import { UserContext } from "../useContext";

const API_BASE_URL = "http://localhost:8077";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [ redirect, setRedirect ] = useState(false)
    const {setUser} = useContext(UserContext)

    const loginUser = async (e) => {
      e.preventDefault()
      try {
        const {data} = await axios.post('/http://localhost:8077/api/v1/user/authenticate', {email, password}, {withCredentials: true});
          localStorage.setItem("token", JSON.stringify(data))
          console.log(data)
        setUser(data)
        alert("login successful")
        setRedirect(true)
      } catch (error) {
        console.log(error)
        alert("login failed. try again")
      }
    }

    if(redirect) {
      return <Navigate to ={'/'} />
    }

  /////

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post(
  //         `${API_BASE_URL}/api/v1/user/authenticate`,
  //         {
  //           email,
  //           password,
  //         }
  //       );
  //       const token = response.data.token;
  //       console.log("Token:", token);
  //       navigate("/home");
  //     } catch (error) {
  //       alert("Error logging in.");
  //     }
  //   };

  return (
    <div className="">
      <div className="">
        <h2 className="">Login</h2>
        <form className="" onSubmit={loginUser}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">login</button>
          <div className="text-center py-2 text-gray-500">
            No account yet?..
            <Link to={"/"} className="text-gray-600 font-bold underline ">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
