import React, { useContext, useState } from "react";
import { UserContext } from "../useContext";
import { useNavigate } from "react-router-dom";
// import axios from 'axios'

const Main = () => {
  const Navigate = useNavigate();
    const { user, setUser, loading } = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);


  const logout = async () => {
    localStorage.removeItem("token")
    setRedirect("/");
    setUser(null);
  };

  if (!loading) {
    return "loading...";
  }

  if (loading && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  
  return (
    <div>
      <div>Welcome! You are logged in as: {user.email}</div>

      <button onClick={logout}></button>

    </div>
  );
};

export default Main;
