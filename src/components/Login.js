import React, {  useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../useContext";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux"
import { toast } from  "react-toastify";
import { login, reset } from '../auth/authSlice'
import Spinner from "./Spinner"

const Login = (props) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
  )
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [redirect, setRedirect] = useState(false);
  // const { setUser } = useContext(UserContext);

  const { email, password } = formData;

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




  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };



  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email, password
      }
      dispatch(login(userData))
      alert("login successful");
    } catch (error) {
      console.log(error);
      alert("login failed. try again");
    }
  };


  if(isLoading) { 
    return <Spinner />
  }

  return (
    <div className="login_container">
      <section className="heading">
        <h2 className=""><FaSignInAlt/> log in</h2>
        <form className="form" onSubmit={loginUser}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your @email.com"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="btn">
            <button className="btn block" type="submit">login</button>
          </div>
          <div className="text-center py-2 text-gray-500">
            No account yet?..
            <Link to={"/signup"} className="text-gray-600 font-bold underline ">
              Register Now
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
