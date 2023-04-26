import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux"
import { toast } from  "react-toastify";
import { register, reset } from '../auth/authSlice'
import Spinner from "./Spinner"

const Signup = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
  )
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //desructure the state from above
  const { firstName, lastName, email, password } = formData;

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    if(isSuccess || user) {
      <Navigate to={"/main"} />
      toast.success(message)
    }
    dispatch(reset())

  },[user, isLoading, isError, isSuccess, message, Navigate, dispatch])

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      }
       dispatch(register(userData))
      alert("Registration successful");
    } catch (error) {
      alert("Registration failed. please try again.");
    }
  };

  if(isLoading) { 
    return <Spinner />
  }

  return (
    <div className="signup_container">
      <section className="heading">
        <h2>
          <FaUser />
          Get Started{" "}
        </h2>
        <p>Please create an account</p>
        <form className="form" onSubmit={registerUser}>
          <div className="form-group">
            <input
              type="text"
              id="firstname"
              placeholder="Enter your First name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="lastName"
              id="lastname"
              placeholder="Enter your Last name"
              value={lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your @email.com"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="btn">
          <button className="btn-block" type="submit">Register</button>
          </div>

          <div className="Link">
            Already a member ?..
            <Link to={"/login"} className="text-gray-600 font-bold underline">
              {" "}
              Go Login
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
