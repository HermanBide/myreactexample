import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css'
// import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    // try {
    //   await axios.post("/register", {
    //     name,
    //     email,
    //     password,
    //   });
    //   alert("Registration successful");
    // } catch (error) {
    //   console.log(error);
    //   alert("Registration failed. please try again.");
    // }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around signup_container">
      <div className="-mb-64 form_container">
        <h2 className="text-4xl text-center">Get Started</h2>
        <form
          className="max-w-md mx-auto border border-none form"
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
            type="number"
            placeholder="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
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
          <div className="text-center py-2 text-gray-500">
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
