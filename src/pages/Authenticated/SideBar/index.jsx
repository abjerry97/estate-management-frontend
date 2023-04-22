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
import PlusCircleIcon from "../../../assets/svg/PlusCircleIcon";
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
      className="position-absolute w-25 wrapper text-white p-5 py-4"
      style={styles}
    >
      <div className="d-flex justify-content-between">
        <span>Menu</span>
        <span className=" cursor-pointer" onClick={()=>setsideBarActive(false)}>close</span>
      </div>

      <div className="d-flex gap-3 mt-4">
        <div className="border w-100 p-3 rounded">Olawaiye Estate</div>
        <div className=""><PlusCircleIcon/></div>
      </div>


      <div className="mt-5">
        <ul className=" list-unstyled sidebar-list">
          <li className="mb-4"> <Link to="/edit-profile"> <EditProfileIcon/> <span> Edit Profile</span></Link></li>
          <li className="mb-4"><Link to="/manage-familymember"><CreateProfileIcon/><span>Create/Manage family <br /> members</span></Link></li>
          <li className="mb-4"><Link to="/wallet/fundwallet"><FundWalletIcon/><span>Fund wallet</span></Link></li>
          <li className="mb-4"><Link to="/apply-as-business"> <ApplyAsBusinessIcon/><span>Apply as business</span></Link></li>
          <li className="mb-4"><Link to="/apply-as-serviceman"><ApplyAsServicemanIcon/><span>Apply as serviceman</span></Link></li>
          <li className="mb-4"><Link to="/upload-property"><UploadPropertyIcon/><span>Upload a property</span></Link></li>
          <li className="mb-4"><Link to="/drop-suggestion"><DropSuggestionIcon/><span>Drop a suggestion</span></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
