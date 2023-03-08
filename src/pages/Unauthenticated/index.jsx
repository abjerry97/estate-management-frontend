
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./home";
import Login from "./Login";
import Signup from "./Signup";

function Unauthenticated(props) {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Home {...props} />}/>
          <Route path="login" element={<Login {...props}/>} />
          <Route path="signup" element={<Signup {...props} />} />
      </Routes>
    </div>
  );
}

export default Unauthenticated;
