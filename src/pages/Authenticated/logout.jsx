import React from 'react';
import { useNavigate } from 'react-router';
// import { 
//   Redirect, 
// } from "react-router-dom"
function Logout() {
    localStorage.removeItem("user"); 
  const navigate=   useNavigate()
  navigate("/")
  return (
    <div>
      {/* <Redirect to="/"/> */}
    </div>
  );
}

export default Logout;
