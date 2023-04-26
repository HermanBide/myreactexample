import React from "react";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Main from "./components/Main";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { UserContextProvider } from './useContext'

import {
  Routes,
  Route,
  BrowserRouter as Router,
  // Router,
  // Switch
} from "react-router-dom";

function App() {
  // const [user, setUser] = useState(null)
  return (
    // <UserContextProvider value={{user, setUser}}>
    <>
    <Router>
    <div className="container">
    <Navbar />
      REact is running
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
    </Router>
    <ToastContainer />
    </>
    // </UserContextProvider>
  );
}

export default App;
