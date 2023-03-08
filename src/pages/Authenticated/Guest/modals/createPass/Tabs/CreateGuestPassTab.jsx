import React, { useState } from "react";
import { Tab } from "react-bootstrap";
import axios from "axios";
import CompanyIcon from "../../../../../../assets/svg/CompanyIcon";
import PersonIcon from "../../../../../../assets/svg/PersonIcon";
import PhonenumberIcon from "../../../../../../assets/svg/PhonenumberIcon";
import PlatenumberIcon from "../../../../../../assets/svg/PlatenumberIcon";
import Taxi from "../../../../../../assets/svg/Taxi";
import { useNavigate } from "react-router-dom";
import Event from "../../../../../../assets/svg/Event";
import GuestIcon from "../../../../../../assets/svg/GuestIcon";

function CreateGuestPassTab(props) {
 
  const navigate=   useNavigate()


  const [guestDriverName, setGuestDriverName] = useState("");
  const [guestDriverPhoneNumber, setGuestDriverPhoneNumber] = useState("");
  const [guestNumberOfVisitors, setGuestNumberOfVisitors] = useState(0);
  const [guestPlateNumber, setGuestPlateNumber] = useState("");

  const handleSubmitGuest = () => {
    axios
      .post(`/guest/create/guest`, {
        phone: guestDriverPhoneNumber,
        name: guestDriverName,
        plateNumber: guestPlateNumber,
        numberOfGuests: guestNumberOfVisitors,
      })
      .then((response) => {
        alert(response.data.message);
        if (response.data.success) {
          if (response.data.guest) {
            const { guest } = response.data;
            //   setUserInfo(user)
            props.setpassInfo({
              name: guest.name,
              icon: <GuestIcon />,
              type: "Guest",
              pass: response.data.code.value,
              email: guest.email,
              phoneNumber: guest.phoneNumber,
              houseAddress: guest.houseAddress,
            });
          }
         
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (

    <>
  <GuestIcon/>  Gate Pass for your Guest
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <PersonIcon />
      <input
        type="text"
        name=""
        id=""
        value={guestDriverName}
        placeholder="Driver’s Name"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setGuestDriverName(e.target.value);
        }}
      />
    </div>
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <CompanyIcon />
      <input
        type="text"
        name=""
        id=""
        value={guestDriverPhoneNumber}
        placeholder="phonenumber"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setGuestDriverPhoneNumber(e.target.value);
        }}
      />
    </div>
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <CompanyIcon />
      <input
        type="text"
        name=""
        id=""
        value={guestNumberOfVisitors}
        placeholder="No. of Visitors"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setGuestNumberOfVisitors(e.target.value);
        }}
      />
    </div>
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <PlatenumberIcon />

      <input
        type="text"
        name=""
        id=""
        value={guestPlateNumber}
        placeholder="Plate Number"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setGuestPlateNumber(e.target.value);
        }}
      />
    </div>
    <div className="mt-4 ">
      <button
        className="page-btn border-0 w-100 p-2"
        onClick={(e) => {
          handleSubmitGuest();
        }}
      >
        Submit
      </button>
    </div>
    <div className=" my-3 ">
        <button
          className="page-btn-white w-100 p-2"
          onClick={props.onHide}
        >
          Close
        </button>
      </div>
  </>
  );
}

export default CreateGuestPassTab;
