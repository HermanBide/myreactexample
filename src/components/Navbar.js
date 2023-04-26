/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
// import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

const navbar = () => {
 // eslint-disable-next-line no-lone-blocks
 {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth)
 
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  
  }

  return (
    <nav className="navbar">
      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
      <h3>Welcome</h3>
      <div className=""></div>

      <ul>
      { user ? (
        <>
        <li className="nav-item">
          <button className="btn" onClick={onLogout}>
            <FaSignOutAlt/> logout
          </button>
        </li>
        </>
      ) : (
        <>
        <li className="nav-item">
          <Link className="nav-link" to="/main">
            Home
          </Link>
        </li>
        <li className="nav-item">
          {" "}
          <Link to="/login">
          <FaSignInAlt /> Login
          </Link>
        </li>
        <li className="nav-item">
          {" "}
          <Link to="/signup">
          <FaUser /> Register
          </Link>
        </li>
        </>
      )}
      </ul>


    </nav>
  );
};

export default navbar;
