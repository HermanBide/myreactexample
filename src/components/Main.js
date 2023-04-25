import React, { useContext, useState } from "react";
import useContext from "../useContext";
// import axios from 'axios'

const Main = () => {
    const { user, setUser, loading } = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

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
      <div>Welcome:</div>

    </div>
  );
};

export default Main;
