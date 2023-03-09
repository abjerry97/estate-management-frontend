import React from "react";
import MoreHorz from "./../../../assets/svg/MoreHorz.svg";
import Bell from "./../../../assets/svg/Bell.svg";
import NotificationBadge from "../../../components/Badge/NotificationBadge";
import { Link } from "react-router-dom";
import EditProfileIcon from "../../../assets/svg/EditProfileIcon";
import CreateProfileIcon from "../../../assets/svg/CreateProfileIcon";
import FundWalletIcon from "../../../assets/svg/FundWalletIcon";
import ApplyAsBusinessIcon from "../../../assets/svg/ApplyAsBusinessIcon";
import ApplyAsServicemanIcon from "../../../assets/svg/ApplyAsServicemanIcon";
import UploadPropertyIcon from "../../../assets/svg/UploadPropertyIcon";
import DropSuggestionIcon from "../../../assets/svg/DropSuggestionIcon";
function SideBar(props) {
  const { name , sideBarActive,    } = props?.userInfo || {};
  const {setsideBarActive}= props
  const styles = {
    backgroundColor: "#33186C",
    left: 0,
    top: 0,
    height: "100vh",
    zIndex: 100,
  };
  return (
    <div
      className="position-absolute w-25 wrapper text-white p-4"
      style={styles}
    >
      <div className="d-flex justify-content-between">
        <span>Menu</span>
        <span className=" cursor-pointer" onClick={()=>setsideBarActive(false)}>close</span>
      </div>

      <div className="d-flex gap-3 mt-3">
        <div className="border w-100">Olawaiye Estate</div>
        <div className="">+</div>
      </div>


      <div className="mt-4">
        <ul className=" list-unstyled">
          <li className="mb-4"> <EditProfileIcon/>Edit Profile</li>
          <li className="mb-4"><CreateProfileIcon/>Create/Manage family <br /> members</li>
          <li className="mb-4"><FundWalletIcon/>Fund wallet</li>
          <li className="mb-4"> <ApplyAsBusinessIcon/>Apply as business</li>
          <li className="mb-4"><ApplyAsServicemanIcon/>Apply as serviceman</li>
          <li className="mb-4"><UploadPropertyIcon/>Upload a property</li>
          <li className="mb-4"><DropSuggestionIcon/>Drop a suggestion</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
