import React from "react";
import MoreHorz from "./../../../assets/svg/MoreHorz.svg"
import Bell from "./../../../assets/svg/Bell.svg"
import NotificationBadge from "../../../components/Badge/NotificationBadge";
import { Link } from "react-router-dom";
function NavBar(props) {
  const { name } = props?.userInfo || {};
  return (
    <div className="d-flex justify-content-between py-4 fz-18">
      <div className=" d-flex align-items-center gap-3">
        <img src={MoreHorz} alt="" srcSet="" />
        <span className="purple-text text-bold ">Hi {name?.split(" ")[0] || ""} </span>
      </div>
      <div className="d-flex purple-text align-items-center gap-5">
        <Link to="/"> Home</Link>
        <Link to="/">Payment</Link>
        <Link to="/servicemen">Services</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/commerce/cart">Cart</Link>
      </div>
      <div className="d-flex align-items-center gap-1"> <NotificationBadge/><img src={Bell} alt="" srcSet="" /></div>
    </div>
  );
}

export default NavBar;
