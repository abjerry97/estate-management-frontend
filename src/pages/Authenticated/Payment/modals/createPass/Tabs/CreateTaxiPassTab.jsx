import React, { useState } from "react";
import { Tab } from "react-bootstrap";
import axios from "axios";
import CompanyIcon from "../../../../../../assets/svg/CompanyIcon";
import PersonIcon from "../../../../../../assets/svg/PersonIcon";
import PhonenumberIcon from "../../../../../../assets/svg/PhonenumberIcon";
import PlatenumberIcon from "../../../../../../assets/svg/PlatenumberIcon";
import Taxi from "../../../../../../assets/svg/Taxi";
import { useNavigate } from "react-router-dom";

function CreateTaxiPassTab(props) {
  const navigate = useNavigate();

  const handleSubmitTaxi = (e) => {
    e.preventDefault();
    axios
      .post(`/guest/create/taxi`, {
        phone: taxiDriverPhoneNumber,
        name: taxiDriverName,
        companyName: taxiCompanyName,
        plateNumber: taxiPlateNumber,
        numberOfGuests: 1,
      })
      .then((response) => {
        alert(response.data.message);
        if (response.data.success) {
          if (response.data.guest) {
            const { guest } = response.data;
            props.onCreate(true);
            props.setpassInfo({
              name: guest.name,
              icon: <Taxi />,
              type: "Taxi",
              pass: response.data.code.value,
              email: guest.email,
              phoneNumber: guest.phoneNumber,
              houseAddress: guest.houseAddress,
            });
            //   setUserInfo(user)
          }
          //  navigate("/passes")
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  const [taxiDriverName, setTaxiDriverName] = useState("");
  const [taxiDriverPhoneNumber, setTaxiDriverPhoneNumber] = useState("");
  const [taxiCompanyName, setTaxiCompanyName] = useState("");
  const [taxiPlateNumber, setTaxiPlateNumber] = useState("");

  return (
    <form>
      <Taxi /> Gate Pass for your Taxi
      <div className="d-flex align-items-center purple-border p-2 mt-3">
        <PersonIcon />
        <input
          type="text"
          name=""
          id=""
          value={taxiDriverName}
          placeholder="Driver’s Name"
          className="border-0 w-100 mx-2 somehow-black-text"
          onChange={(e) => {
            setTaxiDriverName(e.target.value);
          }}
        />
      </div>
      <div className="d-flex align-items-center purple-border p-2 mt-3">
        <PhonenumberIcon />

        <input
          type="text"
          name=""
          id=""
          value={taxiDriverPhoneNumber}
          placeholder="phonenumber"
          className="border-0 w-100 mx-2 somehow-black-text"
          onChange={(e) => {
            setTaxiDriverPhoneNumber(e.target.value);
          }}
        />
      </div>
      <div className="d-flex align-items-center purple-border p-2 mt-3">
        <CompanyIcon />
        <input
          type="text"
          name=""
          id=""
          value={taxiCompanyName}
          placeholder="Company Name"
          className="border-0 w-100 mx-2 somehow-black-text"
          onChange={(e) => {
            setTaxiCompanyName(e.target.value);
          }}
        />
      </div>
      <div className="d-flex align-items-center purple-border p-2 mt-3">
        <PlatenumberIcon />

        <input
          type="text"
          name=""
          id=""
          value={taxiPlateNumber}
          placeholder="Plate Number"
          className="border-0 w-100 mx-2 somehow-black-text"
          onChange={(e) => {
            setTaxiPlateNumber(e.target.value);
          }}
        />
      </div>
      <div className="mt-4 ">
        <button
          className="page-btn border-0 w-100 p-2"
          onClick={(e) => {
            handleSubmitTaxi(e);
          }}
        >
          Submit
        </button>
      </div>
      <div className=" my-3 ">
        <button className="page-btn-white w-100 p-2" onClick={props.onHide}>
          Close
        </button>
      </div>
    </form>
  );
}

export default CreateTaxiPassTab;
