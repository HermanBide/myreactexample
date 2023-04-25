import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css'
import axios from "axios";


const API_BASE_URL = "http://localhost:8077";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


//   const Register = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         await axios.post(`${API_BASE_URL}/api/v1/user/signup`, {
//           email,
//           password,
//         });
//         alert("User Registered Successfully");
//       } catch (err) {
//         alert("Error registering user");
//       }
//     };

///////

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/http://localhost:8077/api/v1/user/signup", {
        firstName,
            lastName,

        email,
        password,
      });
      alert("Registration successful");
    } catch (error) {
      console.log(error);
      alert("Registration failed. please try again.");
    }
  };

  return (
    <div className="signup_container">
      <div className="form_container">
        <h2 >Get Started</h2>
        <form
          className="form"
          onSubmit={registerUser}
        >
          <input
            type="name"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="name"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <button className="primary">Register</button>

          <div className="Link">
            Already a member ?..
            <Link to={"/login"} className="text-gray-600 font-bold underline">
              {" "}
              Go Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
