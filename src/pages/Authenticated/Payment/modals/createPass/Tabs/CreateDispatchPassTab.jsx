import React, { useState } from "react";
import { Tab } from "react-bootstrap";
import axios from "axios";
import CompanyIcon from "../../../../../../assets/svg/CompanyIcon";
import PersonIcon from "../../../../../../assets/svg/PersonIcon";
import PhonenumberIcon from "../../../../../../assets/svg/PhonenumberIcon";
import PlatenumberIcon from "../../../../../../assets/svg/PlatenumberIcon";
import Taxi from "../../../../../../assets/svg/Taxi";
import { useNavigate } from "react-router-dom";
import Dispatch from "../../../../../../assets/svg/Dispatch";

function CreateDispatchPassTab(props) {
 
  const navigate=   useNavigate()

  const [riderDriverName, setRiderDriverName] = useState("");
  const [riderDriverPhoneNumber, setRiderDriverPhoneNumber] = useState("");
  const [riderCompanyName, setRiderCompanyName] = useState("");
  const [riderPlateNumber, setRiderPlateNumber] = useState("");
  const handleSubmitRider = () => {
    axios
      .post(`/guest/create/taxi`, {
        phone: riderDriverPhoneNumber,
        name: riderDriverName,
        companyName: riderCompanyName,
        plateNumber: riderPlateNumber,
        numberOfGuests: 1,
      })
      .then((response) => {
        alert(response.data.message);
        if (response.data.success) {
          if (response.data.guest) {
            const { guest } = response.data;
            //   setUserInfo(user)
            props.setpassInfo({
              name: guest.name,
              icon: <Dispatch />,
              type: "Dispatch",
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
    <Dispatch/> Gate Pass for your Dispatch
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <PersonIcon />
      <input
        type="text"
        name=""
        id=""
        value={riderDriverName}
        placeholder="Rider’s Name"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setRiderDriverName(e.target.value);
        }}
      />
    </div>
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <PhonenumberIcon />
      <input
        type="text"
        name=""
        id=""
        value={riderDriverPhoneNumber}
        placeholder="phonenumber"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setRiderDriverPhoneNumber(e.target.value);
        }}
      />
    </div>
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <CompanyIcon />

      <input
        type="text"
        name=""
        id=""
        value={riderCompanyName}
        placeholder="Company name"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setRiderCompanyName(e.target.value);
        }}
      />
    </div>
    <div className="d-flex align-items-center purple-border p-2 mt-3">
      <PlatenumberIcon />

      <input
        type="text"
        name=""
        id=""
        value={riderPlateNumber}
        placeholder="Plate Number"
        className="border-0 w-100 mx-2 somehow-black-text"
        onChange={(e) => {
          setRiderPlateNumber(e.target.value);
        }}
      />
    </div>
    <div className=" mt-4 ">
      <button
        className="page-btn border-0 w-100 p-2"
        onClick={(e) => {
          handleSubmitRider();
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

export default CreateDispatchPassTab;
