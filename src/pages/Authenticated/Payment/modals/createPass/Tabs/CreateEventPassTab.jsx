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

function CreateEventPassTab(props) {
 
  const navigate=   useNavigate()

  const [eventDriverName, setEventDriverName] = useState("");
  const [eventDriverPhoneNumber, setEventDriverPhoneNumber] = useState("");
  const [eventNumberOfVisitors, setEventNumberOfVisitors] = useState(0);
  const [eventPlateNumber, setEventPlateNumber] = useState("");
  const handleSubmitEvent = () => {
    axios
      .post(`/guest/create/event`, {
        phone: eventDriverPhoneNumber,
        name: eventDriverName,
        plateNumber: eventPlateNumber,
        numberOfGuests: eventNumberOfVisitors,
      })
      .then((response) => {
        alert(response.data.message);
        if (response.data.success) {
          if (response.data.guest) {
            const { guest } = response.data;
            //   setUserInfo(user)
            props.setpassInfo({
              name: guest.name,
              icon: <Event />,
              type: "Event",
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
   <Event/> Gate Pass for your Event
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <PersonIcon />
      <input
        type="text"
        name=""
        id=""
        value={eventDriverName}
        placeholder="Driver’s Name"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setEventDriverName(e.target.value);
        }}
      />
    </div>
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <PhonenumberIcon />
      <input
        type="text"
        name=""
        id=""
        value={eventDriverPhoneNumber}
        placeholder="phonenumber"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setEventDriverPhoneNumber(e.target.value);
        }}
      />
    </div>
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <CompanyIcon />
      <input
        type="text"
        name=""
        id=""
        value={eventNumberOfVisitors}
        placeholder="No. of Visitors"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setEventNumberOfVisitors(e.target.value);
        }}
      />
    </div>
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <PlatenumberIcon />

      <input
        type="text"
        name=""
        id=""
        value={eventPlateNumber}
        placeholder="Plate Number"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setEventPlateNumber(e.target.value);
        }}
      />
    </div>
    <div className=" mt-4 ">
      <button
        className="page-btn border-0 w-100 p-2"
        onClick={(e) => {
          handleSubmitEvent();
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

export default CreateEventPassTab;
